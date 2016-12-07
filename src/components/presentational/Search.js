import React, { PropTypes, Component } from 'react';
import Tooltip from 'react-tooltip-component';

//Presentational Search component which is then passed to the connected SearchBar component
class Search extends Component {
    //props validation
    static propTypes = {
        searchbarTitle: PropTypes.string,
        inputValue: PropTypes.string,
        isHidden: PropTypes.bool,
        createSearch: PropTypes.func
    };

    render() {
        //props
        const { searchbarTitle = "Search", inputValue, createSearch } = this.props;

        return (
            <div>
            <div className="searchBar">
                <div className="search__heading">{searchbarTitle} <i className="search__icon fa fa-search" aria-hidden="true"></i></div>
                {/* Tooltip is wrapped around the input so when the user is interacting with the tooltip they can seek help */}
                <Tooltip title='Enter text to search by article or news source' position='top'>
                    <input
                    className="search__input"
                    type="text"
                    // defaultValue is the inputValue
                    defaultValue={inputValue}
                    placeholder=" search for article or source here......"
                    ref={(node) => { this.textInput = node; }}
                    // onChange is fired when the user enters something into the textbox which will then fire the createSearch function
                    onChange={() => createSearch(this.textInput.value)}
                    />
                </Tooltip>
            </div>
         </div>
        );
    }

}


export default Search;
