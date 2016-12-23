import React from 'react';
// components imports
import NavBar from 'components/presentational/NavBar';
import UserExperience from 'components/presentational/UserTour';
// Imports the main style sheet for the whole app.
import 'styles/main.scss';

// CoreLayout of whole RIA which contains UserExperience component, Navbar and renders children components
const CoreLayout = ({children}) => {
    return (
        <div>
            {/* User Experience componet */}
            <UserExperience/>
            {/* NavBar component */}
            <NavBar />
            <div className="container">
            {/*  Children of the Core Layout rendered inside the container */}
                {children}
            </div>
        </div>
    );
};

// Core layout propTypes validation
CoreLayout.propTypes = {
    children: React.PropTypes.node.isRequired
};

// Export CoreLayout
export default CoreLayout;
