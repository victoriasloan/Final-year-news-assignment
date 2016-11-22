import React from 'react';


//Presentation News Article Component
const PopularArticle = ({ author, title, description, url, publishedAt }) => {
    return (
        <div className="popularArticle">
            <h1 className="newsArticle__title">{title}</h1>
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
        </div>
    );
};

//News Article Props Validation
PopularArticle.propTypes = {
    author: React.PropTypes.string,
    title: React.PropTypes.string,
    description: React.PropTypes.string,
    url: React.PropTypes.string,
    urlToImage: React.PropTypes.string,
    publishedAt: React.PropTypes.string
};

export default PopularArticle;
