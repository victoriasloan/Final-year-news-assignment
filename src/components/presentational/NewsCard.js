import React from 'react';
import {CARD_TYPES} from 'constants/cardConstants';
import NewsArticle from 'components/presentational/NewsArticle';
import { hashHistory } from 'react-router';

const NewsCard = ({
    stories = [],
    source,
    cardType
}) => {
    let cardContent;

    switch (cardType) {
        case CARD_TYPES.OVERVIEW:
            cardContent = (
                <div className="newsProviderLogo">
                    <img onClick={() => hashHistory.push(`/articles/${source.id}`)} src={source.urlsToLogos.small}/>
                </div>
            );
            break;
        case CARD_TYPES.DRILLDOWN:
            cardContent = stories.map((story, index) => <NewsArticle key={index} {...story} />);
            break;
    }
    return (
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
