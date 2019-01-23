import React, {Component} from 'react';
import './styles/App.scss';
import SellBeans from './SellBeans';
import {Provider} from 'react-redux';

class App extends Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <div className="App">
                    <SellBeans></SellBeans>
                </div>
            </Provider>
        );
    }
}

export default App;
