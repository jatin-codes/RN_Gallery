import React, {Component} from 'react';
import { View } from 'react-native';
import GalleryHeader from './src/components/GalleryHeader';
import GalleryButton from './src/components/GalleryButton';
import GalleryList from './src/components/GalleryList';

class App extends Component {
  render () {
    return (
      <View style= {Styles.ViewStyle}>
          <GalleryHeader/>
          <GalleryList/>
          <GalleryButton/>
      </View>
    );
  }
}

const Styles = {
  ViewStyle: {
    flex: 1,
    backgroundColor: '#fcfdff'
  }
};

export default App;