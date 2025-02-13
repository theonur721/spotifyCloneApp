import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ArtistsCard = ({artist}) => {
  return (
    <TouchableOpacity>
      <View style={styles.artistsContainer}>
        <Image
          style={styles.artistImg}
          source={{uri: artist?.data.visuals.avatarImage?.sources[0].url}}
        />
        <Text numberOfLines={1} style={styles.artistName}>
          {artist.data.profile.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ArtistsCard;

const styles = StyleSheet.create({
  artistsContainer: {
    marginTop: 4,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 2,
  },
  artistImg: {
    backgroundColor: 'beige',
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  artistName: {
    color: 'white',
    marginTop: 10,
  },
});
