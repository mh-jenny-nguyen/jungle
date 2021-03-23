import React from "react";
import { NavLink } from "react-router-dom";
import './style.scss';

const TopNavigation = (props) => {
  const listItem = props.list.map((item, index) => {
    return (
      <li className="top-nav__item" key={index}>
        <NavLink to={item.href}>{item.name}</NavLink>
      </li>
    );
  });

  return (
    <div className="top-nav">
      <div className="top-nav__wrapper">
        {listItem.length > 0 && 
			<ul className="top-nav__list">
				{listItem}
			</ul>
		}
      </div>
    </div>
  );
};

export default TopNavigation;
