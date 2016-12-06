import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import * as actionCreators from 'modules/NewsDucks';

// Components
import Search from 'components/presentational/Search';

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

const mapStateToProps = (state) => ({
        searchTerm: state.newsReducer.searchTerm,
        errorMessage: state.newsReducer.errorMessage,
        searchbarTitle: state.newsReducer.searchbarTitle
});

const SearchBar = (props) => <Search { ...props} />;

SearchBar.propTypes = {
    searchbarTitle: React.PropTypes.string,
    searchTerm: React.PropTypes.string,
    errorMessage: React.PropTypes.string,
    createSearch: React.PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
