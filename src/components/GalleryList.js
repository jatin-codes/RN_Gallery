import React, {Component} from 'react';
import { FlatList, View, Text, AsyncStorage } from 'react-native';
import axios from 'axios';
import GalleryDetail from './GalleryDetail';
import ProcessIndicator from './ProcessIndicator';

class GalleryList extends Component {

    state = { photos: []};

    componentWillMount() {
        axios.get('http://jsonplaceholder.typicode.com/photos')
        .then(response => this.setState({ photos: response.data }))
        .catch((error)=> console.warn("fetch Error: ", error));
    }

    renderPhoto = ({item})=> {
        return <GalleryDetail photo={item}/>
    }

    keyExtractor = (photo, index) => photo.id;

    render () {

        if(!this.state.photos){
            return <ProcessIndicator/>;
        }

        return (
                <FlatList
                    data = {this.state.photos}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderPhoto}
                />
        );
    }
}

export default GalleryList;