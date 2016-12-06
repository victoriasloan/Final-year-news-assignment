import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import {
//     Responsive,
//     WidthProvider
// } from 'react-grid-layout';
import NewsCard from 'components/presentational/NewsCard';
import {CARD_TYPES} from 'constants/cardConstants';
import {Col} from 'react-bootstrap';
import {
    byKeyAndSearchTerm
} from 'utils/utilityFunctions';
import {
    filter
} from 'ramda';

// Actions
import {
    getNewsStoriesFromSource,
    saveArticle
} from 'modules/NewsDucks';

const mapStateToProps = (state) => {
    const { articlesForCurrentSource, searchTerm } = state.newsReducer;

    return {
        stories: articlesForCurrentSource,
        storiesToShow: filter(byKeyAndSearchTerm('title', searchTerm), articlesForCurrentSource)
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getNewsStoriesFromSource,
    saveArticle
}, dispatch);

class NewsDrilldownDeck extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {getNewsStoriesFromSource, params} = this.props;

        getNewsStoriesFromSource(params.newsprovider);
    }

    render() {
        const { storiesToShow = this.props.stories, saveArticle } = this.props;

        return (
            <div>
            <Col xs={12} md={8}>
                <NewsCard
                    title={'FEATURED ARTICLES'}
                    cardType={CARD_TYPES.DRILLDOWN}
                    stories={storiesToShow ? storiesToShow.slice(0, 5) : []}
                    saveArticle={saveArticle}
                />
            </Col>
            <Col xs={12} md={4}>
                <NewsCard
                    title={'POPULAR ARTICLES'}
                    cardType={CARD_TYPES.DRILLDOWN}
                    stories={storiesToShow ? storiesToShow.slice(5, 10) : []}
                    saveArticle={saveArticle}
                    />
            </Col>
            </div>
        );
    };

}

NewsDrilldownDeck.propTypes = {
    getNewsStoriesFromSource: React.PropTypes.func,
    category: React.PropTypes.string,
    deckType: React.PropTypes.string,
    params: React.PropTypes.object,
    stories: React.PropTypes.array,
    storiesToShow: React.PropTypes.array,
    saveArticle: React.PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsDrilldownDeck);
