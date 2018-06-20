import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => { //functional component
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={size || 'large'} />
            {/* if we dont tell the size then default size is set to large */}
        </View>
    );
};

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
    }
};

export { Spinner };
