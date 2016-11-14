import React from 'react';

const NewsArticle = ({ author, title, description, url, urlToImage, publishedAt }) => {
    return (
        <div>
        <h1>{title}</h1>
        <img src={urlToImage}/>
        <h1>Written by this person{author}</h1>
        <h3>{description}</h3>
        <a href={url}> {url} </a>
        <h3>{new Date(publishedAt).toString()}</h3>
        </div>
    );
};

NewsArticle.propTypes = {
    author: React.PropTypes.string,
    title: React.PropTypes.string,
    description: React.PropTypes.string,
    url: React.PropTypes.string,
    urlToImage: React.PropTypes.string,
    publishedAt: React.PropTypes.string
};

export default NewsArticle;
