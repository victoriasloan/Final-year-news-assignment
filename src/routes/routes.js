import React from 'react';
import NewsOverviewDeck from 'components/connected/NewsOverviewDeck';
import NewsDrilldownDeck from 'components/connected/NewsDrilldownDeck';
import CoreLayout from 'layout/CoreLayout';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

export default (
<Router history={hashHistory}>
    <Route path="/" component={CoreLayout}>
        <IndexRoute component={NewsOverviewDeck}/>
        <Route path="/:category" component={NewsOverviewDeck}/>
        <Route path="/articles/:newsprovider" component={NewsDrilldownDeck}/>
    </Route>
</Router>
);
