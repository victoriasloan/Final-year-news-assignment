import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import * as actionCreators from 'modules/NewsDucks';

// Components
import Search from 'components/presentational/Search';

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

//mapStateToProps - searchTerm from state and searchbarTitle
const mapStateToProps = (state) => ({
        searchTerm: state.newsReducer.searchTerm,
        searchbarTitle: state.newsReducer.searchbarTitle
});

//SearchBar -> props function and search bar renders with props.
const SearchBar = (props) => <Search { ...props} />;

// Search bar validation
SearchBar.propTypes = {
    searchbarTitle: React.PropTypes.string,
    searchTerm: React.PropTypes.string,
    createSearch: React.PropTypes.func.isRequired
};


//mapStateToProps and mapDispatchToProps connected to SearchBar and exported.
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
