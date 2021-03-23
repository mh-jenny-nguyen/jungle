import React from 'react';
import './style.scss';

const Author = (props) => {
	return (
		<div className="about-author">
			<h3 className="about-author__pushlished">Published by {props.name}</h3>
			<div className="about-author__info">
				<div className="about-author__avatar">
					<img src={props.avatar} alt="" />
				</div>
				<div className="about-author__desc">
					{props.description}
				</div>
			</div>
		</div>
	);
}

export default Author;