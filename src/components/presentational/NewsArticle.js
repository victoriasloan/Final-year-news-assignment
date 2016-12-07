import React from 'react';
import StarRater from 'components/connected/StarRater';


//Presentation News Article Component- article, saveArticle, saveable passed as props
const NewsArticle = ({ article, saveArticle, saveable = true }) => {
    return (
        <div className="newsArticle">
            {/* Dynamic article title as it is passed as props  */}
            <h1 className="newsArticle__title">{article.title}</h1>
            {/* Dynamic article url */}
            <img className="newsArticle__image" src={article.urlToImage}/>
            {/* Date published and coverted to string */}
            <p>{new Date(article.publishedAt).toString()}</p>
            {/* Author from each article  */}
            <h5>Written by: {article.author}</h5>
            <p className="newsArticle__description">{article.description}</p>
            <div className="newsArticle__more">
                <a href={article.url} className="btn-primary"> View Article</a>
                {/* if article is saveable which has been passed as a prop then pass the saveArticle function onClick  */}
                {saveable &&
                        <a className="newsArticle__save" onClick={() => saveArticle(article)}>
                            Save Article
                        </a>
                }
            </div>
            {/* StarRater imported and used on each article */}
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

// export NewsArticle
export default NewsArticle;
