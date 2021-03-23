import React from 'react';
import './style.scss';

const AboutUs = (props) => {
	return (
		<div className="w-about-us">
			<h3 className="w-about-us__title">
				About Blogs
			</h3>
			<div className="w-about-us__content">
				<p>
					Welcome to my blog! My name is
					John Wood. I am a writer, I like
					to travel and I love to
					photograph beautiful nature
					places and happy peoples.
				</p>
				<p>
					I created this blog to tell you
					stories from my life, share my
					impressions of trips and travels
					and show the best photos I’ve
					made. Thank you for attention!
				</p>
			</div>
		</div>
	);
}

export default AboutUs;