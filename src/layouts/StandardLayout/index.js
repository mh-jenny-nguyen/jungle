import React from "react";
import './style.scss';
import StickyNavigation from "../../components/StickyNavigation";
import SideHeader from "../../components/SideHeader";
import TopNavigation from "../../components/TopNavigation";
import BannerAd from "../../components/BannerAd";
import AboutUs from "../../components/AboutUs";
import FeaturedPost from "../../components/FeaturedPost";
import { useContext, useState } from "react";
import { PostContext } from "../../context/post";
import AdImg from "../../assets/img/Webp.net-resizeimage-min.jpg";
import logo from "../../assets/img/logo.png";
import { faFacebookF, faTwitter, faInstagram, faPinterestP } from "@fortawesome/free-brands-svg-icons";
import { useHistory } from "react-router-dom";

const StandardLayout = (props) => {
  const context = useContext(PostContext);
  const history = useHistory();
  const { filterPostByKeyWord, featuredPost } = context;
  const [isOpenStickyMenu, setIsOpenStickyMenu] = useState(false);
  const [keyword, setKeyword] = useState("");

  const listMenu = [
	  {
		  name: 'Home',
		  href: '/'
	  },
	  {
		  name: 'Contact Us',
		  href: '/contact-us'
	  },
	  {
		  name: 'Portfolio',
		  href: '/portfolio',
	  },
	  {
		  name: 'Social Life',
		  href: '/social-life',
	  },
	  {
		  name: 'Follow me',
		  href: '/follow-me',
	  }
  ];

  const exLinks = [
	{href: 'https://www.facebook.com/', icon: faFacebookF},
	{href: 'https://twitter.com/', icon: faTwitter},
	{href: 'https://www.instagram.com/', icon: faInstagram},
	{href: 'https://www.pinterest.com/', icon: faPinterestP}
  ]


  const handleSearch = (e) => {
	  e.preventDefault();
	  filterPostByKeyWord(keyword);
	  history.push(`/search`);
  }

  return (
    <div id="page-container" className="layout-masonry">
      <StickyNavigation
        isOpen={isOpenStickyMenu}
        onClickCloseBtn={() => {
          setIsOpenStickyMenu(false);
        }}
      />
      <div id="page-content" className="page-content">
        <div id="sidebar" className="sidebar">
          <SideHeader
            onClickBarIcon={() => {
              setIsOpenStickyMenu(true);
            }}
			logo={logo}
			exLinks={exLinks}
			keyword={keyword}
			onChangeKeyword={(val) => setKeyword(val)}
			onSubmit={handleSearch}
			siteDes='Welcome to my blog! I am a writer, I like to travel and I love to photograph beautiful nature places and happy peoples'
          />
        </div>
        <div id="content" className="content">
          <TopNavigation list={listMenu} />
          <main id="primary-content">
            <div className="main-wrapper">{props.children}</div>
          </main>
          <BannerAd name="Your Ad" img={AdImg} url="https://shopee.vn/" />
          <div id="secondary-content">
            <div className="widget-area">
              <aside className="widget">
                <AboutUs />
              </aside>
              <aside className="widget">
                <FeaturedPost data={featuredPost} />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StandardLayout;
