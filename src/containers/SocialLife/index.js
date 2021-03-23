import React from 'react';
import PageHeader from '../../components/PageHeader';
import './style.scss';

const SocialLife = (props) => {
	return(
		<React.Fragment>
			<PageHeader>
				<h1 className="page-header__title">Social Life</h1>
				<h3 className="page-header__sub-title align-left">Life is what happens when you're busy making other plans</h3>
			</PageHeader>
			<div className="content-container">
				<h3>Follow me</h3>
				<address>
			    You can visit me at <a href="https://www.facebook.com">
			    www.facebook.com/ohhmymaill</a>.<br/>
			    If you want to see my collection , please follow<a href="https://www.instagram.com">
			     my Instagram</a>.<br/>
			    You may also want to visit us:<br/>
			    <a href="https://www.Pinterest.com">Pinterest</a><br/>
			    Follow me guys !
			  </address>
			</div>
		</React.Fragment>
	);
}

export default SocialLife;