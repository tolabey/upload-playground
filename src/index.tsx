import * as I from 'immutable';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import { createStore } from 'redux';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';
import Routes from './Routes';
import * as Store from './store/reducers'


const store = createStore<I.Map<string, any>, Store.IActions, any, any>(Store.reducers, I.Map());


ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
