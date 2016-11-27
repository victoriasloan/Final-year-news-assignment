import React from 'react';

const Search = ({  inputValue, errorMessage, onChange }) => {
    return (
        <div>
        <div className="search__heading">HEADING</div>

          <input
            type="text"
            defaultValue={inputValue}
            onChange= {(this.textInput.value)}
          />
          <div className="search__errorMessage">{errorMessage}</div>
          </div>

    );


};



Search.propTypes = {

    inputValue: React.PropTypes.string,
    errorMessage: React.PropTypes.string,
    onChange: React.PropTypes.func

};

export default Search;
