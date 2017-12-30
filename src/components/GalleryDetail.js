import React, {Component} from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const GalleryDetail = (props)=> {
    return (
        <Card>
            <CardSection style = {styles.headerContentStyle}>
                <Image
                    style={styles.thumbnailStyle}
                    source = {{ uri: props.photo.thumbnailUrl}}/>
                <Text style= {styles.textStyle}>{props.photo.title}</Text>
            </CardSection>
        </Card>
    );
};

const styles = {
   headerContentStyle: {
       flexDirection: 'column',
       justifyContent: 'space-around'
   },
   
   thumbnailStyle: {
       height: 60,
       width: 60
   },

   textStyle: {
       fontSize: 12,
       //textAlign: 'right',
       flexDirection: 'row',
       justifyContent: 'flex-end',
       flex: 1,
       flexWrap: 'wrap',
       marginLeft: 5,
       marginRight: 5,
   }
}

export default GalleryDetail;
