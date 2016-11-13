import React from 'react';
import NavBar from 'components/presentational/NavBar';
import 'styles/main.scss';


const CoreLayout = ({children}) => {
    return (
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
