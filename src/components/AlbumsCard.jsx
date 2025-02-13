import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const AlbumsCard = ({album}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Info', {album})}
      style={styles.albumContainer}>
      <Image source={{uri: album.coverArt}} style={styles.albumImg} />
      <Text numberOfLines={1} style={styles.albumName}>
        {album.name}
      </Text>
      <Text numberOfLines={1} style={styles.albumArtist}>
        {album.artist}
      </Text>
    </TouchableOpacity>
  );
};

export default AlbumsCard;

const styles = StyleSheet.create({
  albumContainer: {
    marginTop: 10,
    marginRight: 22,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  albumImg: {
    width: 120,
    height: 120,
    backgroundColor: 'gray',
  },
  albumName: {
    color: 'white',
    fontWeight: '600',
    fontSize: 17,
  },
  albumArtist: {
    color: 'gray',
    fontSize: 16,
  },
});
