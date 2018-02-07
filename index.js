// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
  //This single view tag will render the Header and AlbumList components
  //and they are used as tags
  <View style={{ flex: 1 }}>
    <Header headerText={'My Album List'} />
    <AlbumList />
  </View>
  );

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
