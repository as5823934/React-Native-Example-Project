import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Spinner, Button } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    //null: dont know if user signed in or not
    state = { loggedIn: null };

    componentWillMount() { //life cycle method
        firebase.initializeApp({
            apiKey: 'AIzaSyDw-Ov_v_OgUVFmEkr8QibrbFPvqc83Gms',
            authDomain: 'auth-7c8a5.firebaseapp.com',
            databaseURL: 'https://auth-7c8a5.firebaseio.com',
            projectId: 'auth-7c8a5',
            storageBucket: '',
            messagingSenderId: '446596109906'
        });
        //if user sign in 
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size='large' />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
