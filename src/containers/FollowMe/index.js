import React from 'react';
import PageHeader from '../../components/PageHeader';

const FollowMe = (props) => {
	return(
		<React.Fragment>
			<PageHeader>
				<h1 className="page-header__title">Follow Me</h1>
				<h3 className="page-header__sub-title align-left">Please follow and subcribe me on <a href="https://tinyjpg.com/">this page</a> or send to e-mail <a href="mailto:ohhmymaill@gmail.com">ohhmymaill@gmail.com</a>. You can also send a message using the feedback form below:</h3>
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

export default FollowMe;