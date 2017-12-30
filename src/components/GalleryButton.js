import React from 'react';
import {Button, View, TouchableOpacity, Linking} from 'react-native';

const GalleryButton = ()=> {
    return (
        <View style= {styles.ButtonStyle}>
        <TouchableOpacity>
            <Button title="Press ME!" onPress= {()=> Linking.openURL('https://www.google.com')}/>
        </TouchableOpacity>
        </View>
    );
};

const styles = {
    ButtonStyle: {
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 25,
        right: 10,
        borderRadius: 25,
    }
}

export default GalleryButton;