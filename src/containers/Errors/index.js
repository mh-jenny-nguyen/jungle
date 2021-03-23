import React from 'react';
import {Link} from 'react-router-dom';
import './style.scss';

const Errors = (props) => {

	return (
		<div className="page-not-found">
			<div className="page-not-found__wrapper">
				<p className="page-not-found__title">404</p>
				<p className="page-not-found__sub-title">Opps...Nothing to show.Please click <Link to={'/'}>return</Link> to the homepage</p>
			</div>
		</div>
	)
}

export default Errors;