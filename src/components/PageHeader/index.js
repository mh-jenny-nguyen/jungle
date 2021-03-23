import React from 'react';
import './style.scss';

const PageHeader = (props) => {
	return (
		<header className="page-header">
			{props.children}
		</header>
	)
}

export default PageHeader;