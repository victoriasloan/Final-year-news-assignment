import React, { PropTypes, Component } from 'react';


class Search extends Component {

    static propTypes = {
        searchbarTitle: PropTypes.string,
        inputValue: PropTypes.string,
        errorMessage: PropTypes.string,
        createSearch: PropTypes.func
    };


    render() {
        const { searchbarTitle = "Search Bar Title", inputValue, errorMessage, createSearch } = this.props;

        return (
            <div>
                <div className="search__heading">{searchbarTitle}</div>
                    <input
                    type="text"
                    defaultValue={inputValue}
                    ref={(node) => { this.textInput = node; }}
                    onChange={() => createSearch(this.textInput.value)}
                    />
                <div className="search__errorMessage">{errorMessage}</div>
             </div>

        );
    }

}

export default Search;
