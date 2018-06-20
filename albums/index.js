//Import a library to help create a component
import React from 'react';
//import ReactNative from 'react-native';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//create component: a javascript function that retun some amount of jsx 
const App = () => (
    <View style={{ flex: 1 }}>
        {/* <Text>Some Text</Text> //render this text on screen */}
        <Header headerText={'Albums'} />
        {/* //set the headerText so we can reuse the component */}
        <AlbumList />
    </View>
);
//Render it to the device
//need to register at least one component: render a app called albums, 
//and a function return app component
//only the 'root' component uses 'AppRegistry'
AppRegistry.registerComponent('albums', () => App);
