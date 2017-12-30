import React from 'react';
import { Text, View } from 'react-native'; // view tag is for sort of styling

const GalleryHeader = (props)=> {
    const { textStyle, viewStyle } = styles;

    return (
        <View style= {viewStyle}>
            <Text style={textStyle}>GALLERY</Text> 
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#f44842',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        padding: 15,
        borderRadius: 5,
    },
    
    textStyle: {
        fontSize: 30, // this is not CSS
        color: '#ffffff'

    }
}

export default GalleryHeader;
// as only the root component uses the appRegistry therefore we wont be using AppRegistery component over here.. 