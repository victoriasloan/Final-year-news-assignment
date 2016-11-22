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
import {getNewsStoriesFromSource} from 'modules/NewsDucks';

const mapStateToProps = (state, ownProps) => ({
    stories: state.newsReducer.newsCards[ownProps.params.newsprovider]
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getNewsStoriesFromSource
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
            <Col xs={12} md={8}>
                <NewsCard cardType={CARD_TYPES.DRILLDOWN} stories={this.props.stories}/>
            </Col>

        );

    };

}

NewsDrilldownDeck.propTypes = {
    getNewsStoriesFromSource: React.PropTypes.func,
    category: React.PropTypes.string,
    deckType: React.PropTypes.string,
    params: React.PropTypes.object,
    stories: React.PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsDrilldownDeck);
