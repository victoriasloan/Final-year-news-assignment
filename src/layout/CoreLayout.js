import React from 'react';
import NavBar from 'components/presentational/NavBar';


const CoreLayout = ({children}) => {
    return (
        // Stick navbar in here

        <div>
            <NavBar />

            {children}
        </div>
    );
};

CoreLayout.propTypes = {
    children: React.PropTypes.node.isRequired
};

export default CoreLayout;
