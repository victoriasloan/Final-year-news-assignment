import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Actions
import {
    getNewsStoriesFromSource
} from 'modules/NewsDucks';

// When state updates, map parts of the state to the props in the connected component passed to connect().
const mapStateToProps = (state) => ({stories: state.newsReducer.newsStories});

// Injects dispatch into the actions passed, so we can change the state when they are called.
// These new actions with dispatch are passed as props to the component specified in connect()
const mapDispatchToProps = (dispatch) => bindActionCreators({
    getNewsStoriesFromSource
}, dispatch);

class NewsCard extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getNewsStoriesFromSource(this.props.source, 'top');
    }

    render() {
        const {stories} = this.props;
        return (
            <div>
            <h1> NEWS STORIES PENIS </h1>
            { stories.map((story, key) => <div key={key}> { story.title } </div>) }
            </div>
        )

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsCard);
