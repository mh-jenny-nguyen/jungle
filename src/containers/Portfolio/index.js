import React from 'react';
import Masonry from 'react-masonry-component';
import PageHeader from '../../components/PageHeader';
import Item from '../../components/Portfolio';
import PagePagination from '../../components/PagePagination';
import './style.scss';
import { PortfolioProvider, PortfolioContext } from '../../context/portfolio';
import {useContext} from 'react';

const Portfolio = () => {
	const context = useContext(PortfolioContext); 
	const {currentItems, numberPerPage, totalOfPage, currentPage, handleLoadPage} = context;

	const list = currentItems.map((item) => {
		return <Item image={item.image} title={item.title} />
	});


	const masonryOptions = {
	    transitionDuration: 0
	};

	return (
		<React.Fragment>
			<PageHeader>
				<h1 className="page-header__title">Portfolio Gallery</h1>
				<h3 className="page-header__sub-title">I’m a Freelance, Web design, Front end developer and more. Focusing across branding and identity, digital and photography.</h3>
			</PageHeader>
			<div className="portfolio">
				<Masonry className={'portfolio__wrapper'} options={masonryOptions} elementType={'article'} >
					{list}
				</Masonry>
			</div>
			<PagePagination numberPerPage={numberPerPage}  totalOfPage={totalOfPage} currentPage={currentPage} handleLoadPage={handleLoadPage} />
		</React.Fragment>
	);
}

const portfolioWithProvider = () => {
	return (
		<PortfolioProvider>
			<Portfolio />
		</PortfolioProvider>
	)
}

export default portfolioWithProvider