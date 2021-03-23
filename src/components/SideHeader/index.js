import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import './style.scss';

const SideHeader = (props) => {
  const exLinks = props.exLinks.map((item, index) => {
    return (
      <li className="site-header__social-item" key={index}>
        <a href={item.href}>
          <FontAwesomeIcon icon={item.icon} />
        </a>
      </li>
    );
  });

  return (
    <React.Fragment>
      <div className="top-side-bar">
        <label
          className="top-side-bar__side-menu-icon"
          onClick={props.onClickBarIcon}
          data-target="nav-sidebar"
        >
          <FontAwesomeIcon icon={faBars} />
        </label>

        <label htmlFor="toogle-search" className="top-side-bar__search-icon">
          <FontAwesomeIcon icon={faSearch} />
        </label>
        <input
          type="checkbox"
          id="toogle-search"
          className="top-side-bar__search-toogle"
        />

        <form
          className="top-side-bar__form"
          id="form-search"
          onSubmit={(e) => props.onSubmit(e)}
        >
          <div className="top-side-bar__form-wrapper">
            <input
              type="text"
              placeholder="Type your keyword"
              className="top-side-bar__form-input"
              val={props.keyword}
              onChange={(e) => props.onChangeKeyword(e.target.value)}
            />
          </div>
        </form>
      </div>
      <header className="site-header">
        <div className="site-header__wrapper">
          <div className="site-header__logo">
            <Link to="/">
              <img src={props.logo} alt="logo" />
            </Link>
          </div>
          <div className="site-header__tag-line">
            <p>{props.siteDes}</p>
          </div>
          <div className="site-header__social-profile">
            {exLinks.length > 0 && 
				<ul className="site-header__social_list">
					{exLinks}
				</ul>
			}
			
          </div>
        </div>
      </header>
      <footer id="footer">
        <div className="site-footer">
          &copy; 2020 <a href="https://tiki.vn/">MH Theme</a>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default withRouter(SideHeader);
