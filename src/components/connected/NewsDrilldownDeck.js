import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Search from 'components/connected/SearchBar';
import NewsCard from 'components/presentational/NewsCard';
import {CARD_TYPES} from 'constants/cardConstants';
import {Col} from 'react-bootstrap';
import {
    byKeyAndSearchTerm
} from 'utils/utilityFunctions';
import {
    filter
} from 'ramda';

import _ from 'lodash';

// Actions import from the Ducks file
import {
    getNewsStoriesFromSource,
    saveArticle
} from 'modules/NewsDucks';

//Map state to props
const mapStateToProps = (state) => {
    const { articlesForCurrentSource, searchTerm } = state.newsReducer;

    return {
        //return the stories for the current source
        stories: articlesForCurrentSource,
        //Stories to show -- used when searching- filters by title and checks that it matches the search term and then gets the articles
        storiesToShow: filter(byKeyAndSearchTerm('title', searchTerm), articlesForCurrentSource)
    };
};

//Dispatch
const mapDispatchToProps = (dispatch) => bindActionCreators({
    getNewsStoriesFromSource,
    saveArticle
}, dispatch);

// Purpose of this component is to render the news articles - featured and popular.
class NewsDrilldownDeck extends Component {
    //Initializing constructor
    constructor(props) {
        super(props);
    }

    //Fire action when component mounts -- (getNewsStoriesFromSource)
    componentDidMount() {
        const {getNewsStoriesFromSource, params} = this.props;

        getNewsStoriesFromSource(params.newsprovider);
    }
    //Render
    render() {
        //Props written in functional way
        const { storiesToShow = this.props.stories, saveArticle } = this.props;

        return (
            <div>
            {/*  Search bar imported*/}
            <Search />
            {/* React bootstrap creating 8 col width featured articles section */}
            <Col xs={12} md={8}>
                <NewsCard
                className="newsDrilldown"
                    title={'FEATURED ARTICLES'}
                    cardType={CARD_TYPES.DRILLDOWN}
                    // Lodash shuffle function used to shuffle the order of the stories
                    stories={storiesToShow ? _.shuffle(storiesToShow) : []}
                    saveArticle={saveArticle}
                />
            </Col>
            {/*  React bootstrap creating 4 col to complete the rest of the 12 columns and contain popular articles */}
            <Col xs={12} md={4}>
                <NewsCard
                    title={'POPULAR ARTICLES'}
                    cardType={CARD_TYPES.DRILLDOWN}
                    // Lodash shuffle function used to shuffle the order of the stories
                    stories={storiesToShow ? _.shuffle(storiesToShow) : []}
                    saveArticle={saveArticle}
                    />
            </Col>
            </div>
        );
    };

}

//Props validation
NewsDrilldownDeck.propTypes = {
    getNewsStoriesFromSource: React.PropTypes.func,
    category: React.PropTypes.string,
    deckType: React.PropTypes.string,
    params: React.PropTypes.object,
    stories: React.PropTypes.array,
    storiesToShow: React.PropTypes.array,
    saveArticle: React.PropTypes.func
};

//connect function to pass mapStateToProps and mapDispatchToProps to NewsDrilldownDeck
export default connect(mapStateToProps, mapDispatchToProps)(NewsDrilldownDeck);
