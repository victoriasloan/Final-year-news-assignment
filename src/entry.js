import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import store from 'store/store';
import appRoutes from 'routes/routes';
// entry for whole application
render(
<Provider store={store}>
    {appRoutes}
</Provider>, document.getElementById('root'));
