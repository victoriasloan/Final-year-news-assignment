import React from 'react';
import StarRater from 'components/connected/StarRater';


//Presentation News Article Component
const NewsArticle = ({ article, saveArticle, saveable = true }) => {
    return (
        <div className="newsArticle">
            <h1 className="newsArticle__title">{article.title}</h1>
            <img className="newsArticle__image" src={article.urlToImage}/>
            <p>{new Date(article.publishedAt).toString()}</p>
            <h5>Written by: {article.author}</h5>
            <p className="newsArticle__description">{article.description}</p>
            <div className="newsArticle__more">
                <div className="btn-primary">
                <a href={article.url}> View Article</a>
                </div>
                {saveable &&
                        <a className="newsArticle__save" onClick={() => saveArticle(article)}>
                            Save Article
                        </a>
                }

            </div>
            <StarRater/>

        </div>
    );
};

//News Article Props Validation
NewsArticle.propTypes = {
    article: React.PropTypes.object,
    saveArticle: React.PropTypes.func,
    saveable: React.PropTypes.bool
};

export default NewsArticle;
