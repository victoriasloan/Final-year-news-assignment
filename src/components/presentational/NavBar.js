import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import Clock from 'react-clock';
import AnalogClock, {Themes} from 'react-analog-clock';
import Time from 'react-time';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    getNewsSourcesFromCategory
} from 'modules/NewsDucks';

const NAV_ITEMS = [
    'all',
    'Business',
    'Entertainment',
    'General',
    'Technology',
    'Gaming',
    'Music',
    'Sport',
    'Science-and-Nature',
    'Saved',
    'Information'
];

// const NAV_ITEMS = {
//     all: 'All',
//     business: 'Business',
//     entertainment: 'Entertainment',
//     general: 'General',
//     technology: 'Technology',
//     gaming: 'Gaming',
//     music: 'Music',
//     sport: 'Sport',
// }

let todaysDate = new Date();


const mapDispatchToProps = (dispatch) => bindActionCreators({
    getNewsSourcesFromCategory
}, dispatch);

class NavBar extends Component {
    render() {
        return (
            <div>
                <div className="navbar__top">
                    <h1 className="navbar__heading">
                        NewsFlash
                    </h1>
                    <div className="navbar__analog">
                        <AnalogClock theme={Themes.dark} width={150}/>
                    </div>
                    <div className="navbar__dateTime">
                        <p className="navbar__time"><Clock/></p>
                        <p><Time value={todaysDate} format="DD/MM/YYYY"/></p>
                    </div>
                </div>

                <Navbar>
                    <Nav>
                        {NAV_ITEMS.map((category, index) => {
                            return (
                                <NavItem
                                key={index}
                                eventKey={index}
                                onClick={() => {
                                    hashHistory.push(`/${category}`);
                                    this.props.getNewsSourcesFromCategory(category);
                                }}>
                                    {category}
                                </NavItem>
                            );
                        })
}

                    </Nav>
                </Navbar>
            </div>
        );
    }
}

NavBar.propTypes = {
    getNewsSourcesFromCategory: React.PropTypes.func
};

export default connect(null, mapDispatchToProps)(NavBar);
