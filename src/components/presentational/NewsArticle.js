import React from 'react';

const NewsArticle = ({ author, title, description, url, urlToImage, publishedAt }) => {
    return (
        <div>
        <img src={urlToImage}/>
        <h1>{title}</h1>
        <h1>Written by this cunt - {author}</h1>
        {description}
        <a href={url}> {url} </a>
        {new Date(publishedAt).toString()}
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
