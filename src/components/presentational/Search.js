import React, { PropTypes, Component } from 'react';


class Search extends Component {

    static propTypes = {
        searchbarTitle: PropTypes.string,
        inputValue: PropTypes.string,
        isHidden: PropTypes.bool,
        createSearch: PropTypes.func
    };

    render() {
        const { searchbarTitle = "Search", inputValue, createSearch } = this.props;

        return (
            <div className="searchBar">
                <div className="search__heading">{searchbarTitle} <i className="search__icon fa fa-search" aria-hidden="true"></i></div> 
                    <input
                    className="search__input"
                    type="text"
                    defaultValue={inputValue}
                    ref={(node) => { this.textInput = node; }}
                    onChange={() => createSearch(this.textInput.value)}
                    />
            </div>
        );
    }

}

export default Search;
