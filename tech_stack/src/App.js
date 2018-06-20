import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
    return (//provider cn only have one child
        <Provider store={createStore(reducers)}>
            <View style={{ flex: 1 }} >
                <Header headerText="Texh Stack" />
                <LibraryList />
            </View>
        </Provider>
    );
};

export default App;
