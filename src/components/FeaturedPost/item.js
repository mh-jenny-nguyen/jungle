import React from 'react';
import {Link} from 'react-router-dom';

const FeaturedPostItem = (props) => {
	return (
		<li className="w-featured-post__item">
			<div className="w-featured-post__thumbnail">
				<img
					src={props.image}
					alt=""
					className="w-featured-post__img"
				/>
			</div>
			<header className="w-featured-post__header">
				<Link to={`/detail/${props.slug}`} className="w-featured-post__item-title">
					<span>{props.title}</span>
				</Link>
				<span className="w-featured-post__item-date">{props.dateCreated}</span>
			</header>
		</li>
	)
}

export default FeaturedPostItem;