import React, {Component} from 'react';
import Client from '../contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const PostContext = React.createContext();

class PostProvider extends Component {
	state = {
		posts: [],
		filterPosts: [],
		currentPosts: [],
		loading: true,
		featuredPost: [],
		portfolio: [],
		currentPage: 1,
		previousPage: 1,
		nextPage: 2,
		numberPerPage: 8,
		totalOfPost: 0,
		totalOfPage: 0,
		keyword: '',
	}

	getData = async () => {
		try{
			let response = await Client.getEntries({
				content_type: "post",
				order: "fields.dateUpdated"
			});

			let posts = this.formatData(response.items);
			let featuredPost = posts.filter(post => post.featured === true);
			let currentPosts = this.getPostByPage(this.state.currentPage, posts);

			this.setState({
				posts: posts,
				loading: false,
				featuredPost: featuredPost,
				TotalOfPost: posts.length,
				currentPosts: currentPosts,
				totalOfPage: Math.ceil(posts.length / this.state.numberPerPage)

			});

		} catch (error) {
			console.log(error);
		}
	}

	getPostByPage = (page = 1, posts = '') => {
		let startIndex = 0;
		let endIndex = this.state.numberPerPage;
		posts = (posts.length > 0 ? posts : this.state.posts);

		if(page > 1) {
			startIndex = (page - 1) * this.state.numberPerPage;
			endIndex = (this.state.numberPerPage * page) - 1;
		}
		
		let tempPosts = posts.slice(startIndex, endIndex);

		return tempPosts;
	}

	handleLoadPage =  (page = 1) => {
		let currentPosts = this.getPostByPage(page);

		this.setState({
			currentPage: page,
			currentPosts: currentPosts,
			previousPage: (page > 1 ? page - 1 : page ),
			nextPage: (page < this.state.totalOfPost ? page + 1 : this.state.totalOfPost),
		});
 	}

	componentDidMount () {
		this.getData();
	}

	formatData =  (items) => {
		let tempItems = items.map(item => {

			let id = item.sys.id
			let image = item.fields.image.fields.file.url;
			let author = {
				name: item.fields.author.fields.name,
				description: item.fields.author.fields.description,
				avatar: item.fields.author.fields.avatar.fields.file.url,
				url: item.fields.author.fields.url,
			}

			let dateCreated = this.formatDate(item.fields.dateCreated);
			let dateUpdated = this.formatDate(item.fields.dateUpdated);

			let post = {...item.fields, id, image, author, dateCreated, dateUpdated};

			return post;
		});

		return tempItems;
	}

	getPost = (slug) => {
		const post = this.state.posts.find( post => {
			return post.slug === slug;
		});

		return post;
	}

	formatDate = (date) => {
		const monthNames = ["January", "February", "March", "April", "May", "June",
		  "July", "August", "September", "October", "November", "December"
		];
		let tempDate = new Date(date);
		let string = monthNames[tempDate.getMonth()] + ' ' + ("0" + tempDate.getDate()).slice(-2) + ', ' + tempDate.getFullYear();
		
		return string;
	} 

	filterPostByKeyWord = (keyword) => {
		let filterPosts = [];

		this.state.posts.forEach( post => {
			let flag = false;
			keyword = keyword.toLowerCase();

			if (post.title.toLowerCase().includes(keyword) || post.summary.toLowerCase().includes(keyword)) {
				flag = true
			} else {
				let content = documentToHtmlString(post.content);

				if(content.toLowerCase().includes(keyword)) {
					flag = true;
				}
			}

			if(flag) {
				filterPosts.push(post);
			}
		});

		this.setState({
			keyword: keyword,
			filterPosts: filterPosts
		});
	}
 
	render() {
		return(
			<PostContext.Provider value={{ ...this.state, getPost: this.getPost, handleLoadPage: this.handleLoadPage, getPostByPage: this.getPostByPage, filterPostByKeyWord: this.filterPostByKeyWord }}>
				{this.props.children}
			</PostContext.Provider>
		);
	}
}

const PostConsumer = PostContext.Consumer;

export function withPostConsumer(Component) {
	return function consumerWrapper(props) {
		return <PostConsumer>
			{value => <Component {...props} context={value} /> }
		</PostConsumer>
	}
}

export {PostProvider, PostConsumer, PostContext}