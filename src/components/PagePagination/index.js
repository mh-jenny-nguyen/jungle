import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import './style.scss';

const PagePagination = (props) => {
	let pages = [];

	const handleClick = (e) => {
		window.scrollTo(0, 0);
		props.handleLoadPage(parseInt(e.target.dataset.page));
	}

	for (let i=1; i <= props.totalOfPage; i++) {
		if(i === props.currentPage) {
			pages.push(<span className="page-navigation__item --page-number --current" key={`pn-${i}`}>{i}</span>);
		} else {
			pages.push(<span className="page-navigation__item --page-number" data-page={i} key={`pn-${i}`} onClick={handleClick}>{i}</span>)
		}
	}

	return (
		<div id="page-navigation">
			<nav className="page-navigation">
				<div className="page-navigation__wrapper">
					{ props.currentPage > 1 &&
						<span data-page={props.currentPage - 1}
						className="page-navigation__item --page-previous" onClick={handleClick}
						><FontAwesomeIcon icon={faChevronLeft} /></span>
					}
					
					{pages}

					{ props.currentPage < props.totalOfPage  &&
						<span data-page={props.currentPage + 1}
							className="page-navigation__item --page-next" onClick={handleClick}
							><FontAwesomeIcon icon={faChevronRight} /></span>
					}
				</div>
			</nav>
		</div>
	);
}

export default PagePagination