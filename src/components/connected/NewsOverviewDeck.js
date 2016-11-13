import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import {
//     Responsive,
//     WidthProvider
// } from 'react-grid-layout';
import NewsCard from 'components/presentational/NewsCard';
import { CARD_TYPES } from 'constants/cardConstants';

// Actions
import {
    getNewsSourcesFromCategory
} from 'modules/NewsDucks';

const mapStateToProps = (state) => ({sources: state.newsReducer.newsSources});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getNewsSourcesFromCategory
}, dispatch);

class NewsOverviewDeck extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { getNewsSourcesFromCategory, params } = this.props;

        getNewsSourcesFromCategory(params.category || "all");
    }

    render() {
        const { sources } = this.props;

        const cards = sources.map((source, key) => {
            return (
                <NewsCard
                    key={key}
                    source={source}
                    cardType={CARD_TYPES.OVERVIEW}
                />);
        });

        // This should be replaced so each card has a loading and not the full deck
        return (<div> {cards.length === 0 ? <span> Loading... </span> : cards} </div>);
    }
}

NewsOverviewDeck.propTypes = {
    getNewsSourcesFromCategory: React.PropTypes.func,
    category: React.PropTypes.string,
    sources: React.PropTypes.array,
    deckType: React.PropTypes.string,
    params: React.PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsOverviewDeck);
