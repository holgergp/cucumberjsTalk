import React, {Component} from 'react';
import './styles/App.scss';
import Bohnen from './Bohnen';
import {Provider} from 'react-redux';

class App extends Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <div className="App">
                    <Bohnen/>
                </div>
            </Provider>
        );
    }
}

export default App;
