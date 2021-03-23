import React from "react";
import loadingGif from "../../assets/img/loading-arrow.gif";
import './style.scss';

const Loading = () => {
	return (
		<div className="loading">
			<div className="loading-wrapper">
				<img src={loadingGif} alt="Loading"/>
				<h3>Loading...</h3>
			</div>
		</div>
	)
}

export default Loading