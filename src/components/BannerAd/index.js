import React from 'react';
import './style.scss';

const BannerAd = (props) => {
	return (
		<div id="banner-ad">
			<div className="banner-ad">
				<a href={props.url} className="banner-ad__href"><img
					src={props.img}
					alt=""
					className="banner-ad__img"
				/></a>
				<span className="banner-ad__txt">{props.name}</span>
			</div>
		</div>
	);
}

export default BannerAd;