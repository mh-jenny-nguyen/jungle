import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { withPostConsumer } from "../../context/post";
import Post from "../../components/Post";
import PageHeader from "../../components/PageHeader";
import "./style.scss";

const Search = ({ context }) => {
  const { filterPosts, keyword } = context;
  const postList = filterPosts.map((item) => {
    return <Post key={item.id} {...item} />;
  });

  return (
    <div className="search-page">
      <PageHeader>
        <h1 className="page-header__title">
          Search result for {`"${keyword}"`}
        </h1>
        <h3 className="page-header__sub-title align-left">
          {filterPosts.length}&nbsp;
          {filterPosts.lenght > 1 ? "results" : "result"}&nbsp;was found
        </h3>
      </PageHeader>
      {filterPosts.length <= 0 && (
        <div className="not-found content-container">
          <span>Opps...Nothing to show</span>
        </div>
      )}

      {filterPosts.length > 0 && 
	  	<section className="posts">
		  <ResponsiveMasonry
			columnsCountBreakPoints={{
			  350: 1,
			  576: 2,
			}}
		  >
			<Masonry className={"posts__layout"} gutter="28px">
			  {postList}
			</Masonry>
		  </ResponsiveMasonry>
		</section>
	  }
    </div>
  );
};

export default withPostConsumer(Search);
