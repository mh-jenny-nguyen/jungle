import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import './style.scss';

const Post = (props) => {
  return (
    <article className="post" data-id={props.id}>
      <Link to={`/detail/${props.slug}`} className="post__thumbnail">
        <LazyLoadImage
          src={props.image} 
        />
      </Link>
      <header className="post__entry-header">
        {props.featured && <span className="post__badges">Featured</span>}

        <h2 className="post__entry-title">
          <Link
            to={`/detail/${props.slug}`}
            className="post__thumbnail"
            rel="bookmark"
          >
            {props.title}
          </Link>
        </h2>
        <div className="post__entry-meta">
          <span className="post__cat">{props.category}</span>
          <span className="post__date">{props.dateCreated}</span>
        </div>
      </header>

      <div className="post__entry-summary">
        <p>{props.summary}...</p>
      </div>
    </article>
  );
};

export default Post;
