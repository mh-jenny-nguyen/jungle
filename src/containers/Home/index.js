import React from "react";
import Post from "../../components/Post";
import PagePagination from "../../components/PagePagination";
import { withPostConsumer } from "../../context/post";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./style.scss";

const Home = ({ context }) => {
  const {
    currentPosts,
    currentPage,
    numberPerPage,
    totalOfPage,
    handleLoadPage,
  } = context;

  const postList = currentPosts.map((item) => {
    return <Post key={item.id} {...item} />;
  });

  return (
    <React.Fragment>
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
      <PagePagination
        numberPerPage={numberPerPage}
        totalOfPage={totalOfPage}
        currentPage={currentPage}
        handleLoadPage={handleLoadPage}
      />
    </React.Fragment>
  );
};

export default withPostConsumer(Home);
