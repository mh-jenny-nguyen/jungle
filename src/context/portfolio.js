import React, {Component} from 'react';
import Client from '../contentful';

const PortfolioContext = React.createContext();

class PortfolioProvider extends Component {
	state = {
		items: [],
		currentItems: [],
		loading: true,
		currentPage: 1,
		previousPage: 1,
		nextPage: 2,
		numberPerPage: 10,
		totalOfItem: 0,
		totalOfPage: 0,
	}

	getData = async () => {
		try{
			let response = await Client.getEntries({
				content_type: "portfolio",
			});

			let items = this.formatData(response.items);
			let currentItems = this.getItemsByPage(this.state.currentPage, items);

			this.setState({
				items: items,
				loading: false,
				TotalOfItems: items.length,
				currentItems: currentItems,
				totalOfPage: Math.ceil(items.length / this.state.numberPerPage)
			});

		} catch (error) {
			console.log(error);
		}
	}

	getItemsByPage = (page = 1, items) => {
		let startIndex = 0;
		let endIndex = this.state.numberPerPage;

		if(page > 1) {
			startIndex = (page - 1) * this.state.numberPerPage;
			endIndex = (this.state.numberPerPage * page) - 1;
		}
		
		let tempItems = items.slice(startIndex, endIndex);

		return tempItems;
	}

	handleLoadPage =  (page = 1) => {
		let currentItems = this.getItemsByPage(page, this.state.items);

		this.setState({
			currentPage: page,
			currentItems: currentItems,
			previousPage: (page > 1 ? page - 1 : page ),
			nextPage: (page < this.state.totalOfItem ? page + 1 : this.state.totalOfItem),
		});
 	}

	componentDidMount () {
		this.getData();
	}

	formatData =  (items) => {
		let tempItems = items.map(item => {

			let id = item.sys.id
			let image = item.fields.image.fields.file.url;
            let title = item.fields.title;

			let post = {id, title,image};

			return post;
		});

		return tempItems;
	}
 
	render() {
		return(
			<PortfolioContext.Provider value={{ ...this.state, handleLoadPage: this.handleLoadPage, getItemsByPage: this.getItemsByPage }}>
				{this.props.children}
			</PortfolioContext.Provider>
		);
	}
}

const PortfolioConsumer = PortfolioContext.Consumer;

export function withPortfolioConsumer(Component) {
	return function consumerWrapper(props) {
		return <PortfolioConsumer>
			{value => <Component {...props} context={value} /> }
		</PortfolioConsumer>
	}
}

export {PortfolioProvider, PortfolioConsumer, PortfolioContext}