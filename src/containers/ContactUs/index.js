import React from 'react';
import './style.scss';
import PageHeader from '../../components/PageHeader';

const ContactUs = (props) => {
	return (
		<React.Fragment>
			<PageHeader>
				<h1 className="page-header__title">Contact us</h1>
				<h3 className="page-header__sub-title align-left">To contact our support team leave a comment on <a href="https://tinyjpg.com/">this page</a> or send to e-mail <a href="mailto:ohhmymaill@gmail.com">ohhmymaill@gmail.com</a>. You can also send a message using the feedback form below:</h3>
			</PageHeader>
			<div className="content-container">
				<h3>Contact Info</h3>
				<address>
				    You can contact author at <a href="http://www.somedomain.com/contact">
				    www.somedomain.com</a>.<br/>
				    If you see any bugs, please <a href="mailto:webmaster@somedomain.com">
				    contact webmaster</a>.<br/>
				    You may also want to visit us:<br/>
				    Mozilla Foundation<br/>
				    331 E Evelyn Ave<br/>
				    Mountain View, CA 94041 USA
			  	</address>
			</div>
		</React.Fragment>
	);
}

export default ContactUs;