import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';


class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDbSb1U39S2kqpdJBOmNl0NYCObRAw4tP0',
            authDomain: 'manager-cb242.firebaseapp.com',
            databaseURL: 'https://manager-cb242.firebaseio.com',
            projectId: 'manager-cb242',
            storageBucket: 'manager-cb242.appspot.com',
            messagingSenderId: '209388491003'
        };

        firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <View style={{ flex: 1 }}>
                    <Router />
                </View>
            </Provider >
        );
    }
}


export default App;
