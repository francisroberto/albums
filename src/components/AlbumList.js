// Import a library
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
// Create a register compoinent

class AlbumList extends Component {
  state = { albums: [] };
//above is initialising an empty class level state that will hold the json data from the api

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      // the key={album.title} is placed to avoid an error
      //"warning: each child in an array or iterator should have a unique 'key' prop.
      //Check the render method"
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    return (
      <ScrollView>
        { this.renderAlbums() }
      </ScrollView>
    );
  }
}

// Make the component available to the other parts of the App

export default AlbumList;
