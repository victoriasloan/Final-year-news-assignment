import React from 'react';
import {CARD_TYPES} from 'constants/cardConstants';
import NewsArticle from 'components/presentational/NewsArticle';
import PopularArticle from 'components/presentational/PopularArticle';
import { hashHistory } from 'react-router';

const NewsCard = ({
    stories = [],
    source,
    cardType
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
            cardContent = stories.map((story, index) => <NewsArticle key={index} {...story} />);
            break;
        case CARD_TYPES.POPULAR:
            cardContent = stories.map((story, index) => <PopularArticle key={index} {...story} />);
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
    source: React.PropTypes.object,
    stories: React.PropTypes.array,
    cardType: React.PropTypes.string.isRequired,
    params: React.PropTypes.object
};

export default NewsCard;
