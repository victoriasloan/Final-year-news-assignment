import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import Clock from 'react-clock';
import AnalogClock, {Themes} from 'react-analog-clock';
import Time from 'react-time';
import {hashHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getNewsSourcesFromCategory} from 'modules/NewsDucks';

//Nav items to be used in navigation
const NAV_ITEMS = [
    'all',
    'Business',
    'Entertainment',
    'General',
    'Technology',
    'Gaming',
    'Music',
    'Sport',
    'Science-and-Nature'
];

//Saved items in different nav bar
const SAVED_ITEMS = [
    'Saved'
];

//Todays date
let todaysDate = new Date();

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getNewsSourcesFromCategory
}, dispatch);

//Nav bar component used to select different categories
class NavBar extends Component {
    render() {
        return (
            <div>
            <div className="navbar__info">
                <div className="navbar__dateTime">
                    <h4> <Clock/></h4>
                    <h4><Time value={todaysDate} format="DD/MM/YYYY"/></h4>
                </div>
                <div className="navbar__firstNav">
                {/* Map over the Saved items */}
                    {SAVED_ITEMS.map((category, index) => {
                        return (
                            <h4
                                className="saved"
                                key={index}
                                onClick={() => {
                                    hashHistory.push(`/${category}`);
                                    this.props.getNewsSourcesFromCategory(category);
                                }}>
                                {"| "   + category +   "   |"}
                            </h4>
                        );
                        })
                    }
                    <div className="dropdown">
                        <button className="btn dropdown-toggle btn-tour" type="button" id="tour_dropdown" data-toggle="dropdown">
                            Website Tour
                            <span className="caret"></span>
                        </button>
                    </div>
                </div>
            </div>
            {/* Navbar section containing the main heading and analog clock */}
            <div className="navbar__top">
                <h1 className="navbar__heading">
                    NewsFlash
                </h1>
                <div className="navbar__analog">
                    <AnalogClock theme={Themes.dark} width={150}/>
                </div>
             </div>
             {/*  Collapsable nav bar using React bootstrap to wrap it into a small React Component*/}
             <Navbar collapseOnSelect>
                    <Navbar.Toggle/>
                    <Navbar.Collapse>
                        <Nav className="nav__links">
                         {/* Map over the Nav_ITEMS and use react router to handle the changing content */}
                            {NAV_ITEMS.map((category, index) => {
                                return (
                                    <NavItem
                                        key={index}
                                        eventKey={index}
                                        onClick={() => {
                                            hashHistory.push(`/${category}`);
                                            // get news sources from category and use as props
                                            this.props.getNewsSourcesFromCategory(category);
                                        }}>
                                        {category}
                                    </NavItem>
                                );
                            })
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

// Navbar props validation
NavBar.propTypes = {
    getNewsSourcesFromCategory: React.PropTypes.func
};

// connect the NavBar to state
export default connect(null, mapDispatchToProps)(NavBar);
