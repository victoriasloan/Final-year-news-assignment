import React from 'react';
import StarRater from 'components/connected/StarRater';

//Presentation News Article Component
const NewsArticle = ({ author, title, description, url, urlToImage, publishedAt }) => {
    return (
        <div className="newsArticle">
            <h1 className="newsArticle__title">{title}</h1>
            <img className="newsArticle__image" src={urlToImage}/>
            <p>{new Date(publishedAt).toString()}</p>
            <h5>Written by: {author}</h5>
            <p className="newsArticle__description">{description}</p>
            <div className="newsArticle__more">
                <div className="btn-primary">
                <a href={url}> View Article</a>
                </div>
                <a className="newsArticle__save">
                    Save Article
                </a>
            </div>
            <StarRater/>
        </div>
    );
};

//News Article Props Validation
NewsArticle.propTypes = {
    author: React.PropTypes.string,
    title: React.PropTypes.string,
    description: React.PropTypes.string,
    url: React.PropTypes.string,
    urlToImage: React.PropTypes.string,
    publishedAt: React.PropTypes.string
};

export default NewsArticle;
