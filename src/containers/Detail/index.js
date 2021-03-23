import React from 'react';
import './style.scss';
import Author from '../../components/Author';
import { useParams } from 'react-router-dom'
import {PostContext} from '../../context/post';
import {useContext} from 'react';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Detail = (props) => {
	let { slug } = useParams();
	let context = useContext(PostContext);
	let {getPost} = context;
	let detail = getPost(slug);
	

	if ( ! detail) {
		return <p>not found</p>;
	} 

	let {title, category, author, dateCreated, content} = detail;

	const richTextOptions = {
  		renderNode: {
		    [BLOCKS.EMBEDDED_ASSET]: (node) => {
		      const { title, description, file } = node.data.target.fields;
		      const mimeType = file.contentType
		      const mimeGroup = mimeType.split('/')[0]

		      switch (mimeGroup) {
		        case 'image':
		          return <img className="img-responsive"
		            title={ title ? title : null}
		            alt={description ?  description : null}
		            src={file.url}
		          />
		        case 'application':
		          return <a
		            alt={description ?  description : null}
		            href={file.url}
		            >{ title ? title : file.details.fileName }
		          </a>
		        default:
		          return <span style={{backgroundColor: 'red', color: 'white'}}> {mimeType} embedded asset </span>
		      }
		      
		    }
		}
	};

	return (
		<div className="content-container post-detail">
			<header className="post-detail__entry-header">
				<a href="!#" className="post-detail__cat">{category}</a>
				<h1 className="post-detail__title">{title}</h1>
				<div className="post-detail__entry-meta">
					<span className="post-detail__posted-on">
						Posted on&nbsp;
						<time className="post-detail__datetime" dateTime="2019-08-08T13:56:34+00:00">{dateCreated}</time>
					</span>
					<span className="post-detail__byline">
						<span className="post-detail__by">&nbsp;by <a className="post-detail__author" href={author.url}>{author.name}</a></span>
					</span>
				</div>
			</header>
			<div className="post-detail__content">
				{ documentToReactComponents (content, richTextOptions) }
			</div>

			<div className="post-detail__author">
				<Author {...author} />
			</div>
		</div>
	);
}

export default Detail;