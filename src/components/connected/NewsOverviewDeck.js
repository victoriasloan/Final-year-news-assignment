import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Search from 'components/connected/SearchBar';
import NewsCard from 'components/presentational/NewsCard';
import { CARD_TYPES } from 'constants/cardConstants';
import {
    Col,
    Row
} from 'react-bootstrap';
import {
    byKeyAndSearchTerm
} from 'utils/utilityFunctions';
import {
    filter,
    uniq
} from 'ramda';

// Actions
import {
    getNewsSourcesFromCategory
} from 'modules/NewsDucks';

//Map state to props - searchTerm and newsSources passed
const mapStateToProps = (state) => {
    const { searchTerm, newsSources } = state.newsReducer;

    return {
        //sources are filtered by name and checked to see if they match the searchterm entered by the user, relevant
        //news sources will then be displayed.
        sources: filter(byKeyAndSearchTerm('name', searchTerm), newsSources),
        //saved stories passed from state
        savedStories: uniq(state.newsReducer.savedArticles)
    };
};

//Map Dispatch to props -- getNewsSourcesFromCategory
const mapDispatchToProps = (dispatch) => bindActionCreators({
    getNewsSourcesFromCategory
}, dispatch);

//The purpose of this component is to display all the news sources/providers
class NewsOverviewDeck extends Component {

    constructor(props) {
        super(props);
    }
    //getNewsSourcesFromCategory and params are passed as props
    //getNewsSourcesFromCategory checked against category or All displayed
    componentDidMount() {
        const { getNewsSourcesFromCategory, params } = this.props;

        getNewsSourcesFromCategory(params.category || "all");
    }

    render() {
        //If not saved then display the sources
        if (this.props.params.category !== 'Saved') {
            const { sources } = this.props;
            const cards = sources.map((source, key) => {
                return (
                    // React bootstrap used to set width to 3 column width for each news source card
                    <Col className="newsProviderCol" key={key} xs={12} md={3}>
                    {/* News Card rendered containing props for news source. cardType is passed to determine that this is for
                        the overview and not the drilldown deck */}
                    <NewsCard
                    // key is needed to provide a unique identifier
                        key={key}
                        source={source}
                        cardType={CARD_TYPES.OVERVIEW}
                    />
                    </Col>
                );
            });

            // If no cards are found then show the span
            return (
                <Row className="show-grid">
                <Search/>
                {cards.length === 0 ? <span> No Stories available. </span> : cards}
                </Row>
            );
        }
        return (
            <NewsCard
            // return saved stories
                stories={this.props.savedStories}
                cardType={CARD_TYPES.SAVED}
            />
        );
    }
}

// NewsOverviewDeck props validation
NewsOverviewDeck.propTypes = {
    getNewsSourcesFromCategory: React.PropTypes.func,
    category: React.PropTypes.string,
    sources: React.PropTypes.array,
    deckType: React.PropTypes.string,
    params: React.PropTypes.object,
    savedStories: React.PropTypes.array
};

//mapStateToProps and mapDispatchToProps connected to NewsOverviewDeck and exported.
export default connect(mapStateToProps, mapDispatchToProps)(NewsOverviewDeck);
