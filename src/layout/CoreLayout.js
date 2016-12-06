import React from 'react';
import NavBar from 'components/presentational/NavBar';
import Search from 'components/connected/SearchBar';
import 'styles/main.scss';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const CoreLayout = ({children}) => {
    return (
        <div>
            <NavBar />


            <div className="container">
                <Search />
                {children}
            </div>
        </div>
    );
};

CoreLayout.propTypes = {
    children: React.PropTypes.node.isRequired
};

export default CoreLayout;
