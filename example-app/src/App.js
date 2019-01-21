import React, {Component} from 'react';
import './styles/App.scss';
import SellBeans from './SellBeans';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducer';
import {Provider} from 'react-redux';
import logger from 'redux-logger'
const store = createStore(
    rootReducer,
    applyMiddleware(logger)
);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <SellBeans></SellBeans>
                </div>
            </Provider>
        );
    }
}

export default App;
