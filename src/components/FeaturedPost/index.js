import React from 'react';
import FeaturedPostItem from "./item";
import './style.scss';

const FeaturedPost = (props) => {

	let featuredPostList = props.data.map( item => {
		return (
			<FeaturedPostItem key={item.id} {...item} />
		);
	})

	return (
		<div className="w-featured-post">
			<h3 className="w-featured-post__title">
				Featured Posts
			</h3>
			<div className="w-featured-post__content">
				<ul className="w-featured-post__list">
					{featuredPostList}
				</ul>
			</div>
		</div>
	);
}

export default FeaturedPost;