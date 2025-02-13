import {View, Text} from 'react-native';
import React from 'react';
import Routes from './src/navigation/Routes';
import {ArtistProvider} from './src/context/ArtistsContext';
import {AlbumsProvider} from './src/context/AlbumsContext';
import {ProfileProvider} from './src/context/ProfileContext';
import {SongsProvider} from './src/context/LsongContext';

const App = () => {
  return (
    <ProfileProvider>
      <ArtistProvider>
        <AlbumsProvider>
          <Routes />
        </AlbumsProvider>
      </ArtistProvider>
    </ProfileProvider>
  );
};

export default App;
