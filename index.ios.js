// index.ios.js - place code in here for ios!!!

// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native'; //Destructuring Imports

import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
        <View style={{ flex: 1 }}>
            <Header headerText={'Albums'} />
            <AlbumList />
        </View>
);

// Render it to the device ('albums' must match project name)
AppRegistry.registerComponent('albums', () => App);