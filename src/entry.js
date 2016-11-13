import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import store from 'store/store';
import appRoutes from 'routes/routes';

render(
<Provider store={store}>
    {appRoutes}
</Provider>, document.getElementById('root'));
