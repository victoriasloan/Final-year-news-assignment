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

// Actions
import {
    getNewsStoriesFromSource,
    saveArticle
} from 'modules/NewsDucks';

const mapStateToProps = (state, ownProps) => ({
    stories: state.newsReducer.newsCards[ownProps.params.newsprovider]
});

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
        return (
            <div>
            <Col xs={12} md={8}>
                <NewsCard
                    title={'FEATURED ARTICLES'}
                    cardType={CARD_TYPES.DRILLDOWN}
                    stories={this.props.stories ? this.props.stories.slice(0, 5) : []}
                    saveArticle={this.props.saveArticle}
                />
            </Col>
            <Col xs={12} md={4}>
                <NewsCard
                    title={'POPULAR ARTICLES'}
                    cardType={CARD_TYPES.DRILLDOWN}
                    stories={this.props.stories ? this.props.stories.slice(5, 10) : []}
                    saveArticle={this.props.saveArticle}
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
    saveArticle: React.PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsDrilldownDeck);
