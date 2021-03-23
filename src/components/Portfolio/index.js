import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Portfolio = (props) => {
  return (
    <article className="portfolio__item">
      <div className="portfolio__frame">
        <Link to={"/"} className="portfolio__thumbnail">
          <img
            src={props.image}
            alt=""
            className="portfolio__img"
          />
        </Link>
        <Link to={"/"} className="portfolio__entry-title">
          <h2 className="portfolio__title">{props.title}</h2>
        </Link>
      </div>
    </article>
  );
};

export default Portfolio;
