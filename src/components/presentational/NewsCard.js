import React from 'react';
import {CARD_TYPES} from 'constants/cardConstants';
import NewsArticle from 'components/presentational/NewsArticle';
import { hashHistory } from 'react-router';

const NewsCard = ({
    stories = [],
    source,
    cardType,
    title,
    saveArticle
}) => {
    let cardContent;

    //Switch statement for card type, overview or drilldown article.
    switch (cardType) {
        case CARD_TYPES.OVERVIEW:
            cardContent = (
                <div className="newsProvider" onClick={() => hashHistory.push(`/articles/${source.id}`)} >
                    <div className="newsProvider__info">
                     <div className="newsProvider__name">
                         <h1>{source.name}</h1>
                     </div>
                    <img src={source.urlsToLogos.small}/>
                    <div className="newsProvider__description">
                        {source.description}
                    </div>
                    </div>
                </div>
            );
            break;
        case CARD_TYPES.DRILLDOWN:
            cardContent =
                <div>
                    <h1 className="newsArticle__Section"> {title} </h1>
                    {stories.map((story, index) => <NewsArticle key={index} article={story} saveArticle={saveArticle} />)}
                </div>;
            break;
        case CARD_TYPES.SAVED:
        cardContent =
            <div>
                <h1 className="savedArticle__section">SAVED ARTICLES</h1>
                {stories.length > 0 ?
                    stories.map((story, index) => <NewsArticle key={index} article={story} saveable={false}/>)
                    : <div> No articles saved. </div>
                }
            </div>;
        break;
    }
    return (
        //Returns appropriate cardcontent --source or article
        <div>
            {cardContent}
        </div>

    );
};

NewsCard.propTypes = {
    getNewsStoriesFromSource: React.PropTypes.func,
    getPopularNewsStoriesFromSource: React.PropTypes.func,
    title: React.PropTypes.string,
    source: React.PropTypes.object,
    stories: React.PropTypes.array,
    cardType: React.PropTypes.string.isRequired,
    params: React.PropTypes.object,
    saveArticle: React.PropTypes.func
};

export default NewsCard;
