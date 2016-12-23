import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// Component imports
import NewsOverviewDeck from 'components/connected/NewsOverviewDeck';
import NewsDrilldownDeck from 'components/connected/NewsDrilldownDeck';
import CoreLayout from 'layout/CoreLayout';

// handles the routing for the whole app using react router.
// The IndexRoute is the NewsOverviewDeck
// If a user selects a category itll display the NewsOverviewDeck with the relevant sources
// IF a user clicks a news source itll display a NewsDrilldownDeck with the relevant articles
export default (
<Router history={hashHistory}>
    <Route path="/" component={CoreLayout}>
        <IndexRoute component={NewsOverviewDeck}/>
        <Route path="/:category" component={NewsOverviewDeck}/>
        <Route path="/articles/:newsprovider" component={NewsDrilldownDeck}/>
    </Route>
</Router>
);
