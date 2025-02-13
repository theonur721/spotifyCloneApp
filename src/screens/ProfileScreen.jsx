import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {ProfileContext} from '../context/ProfileContext';

const ProfileScreen = () => {
  const {loading, error, profileData} = useContext(ProfileContext);
  return (
    <LinearGradient colors={['#000000', '#1A1A1A']} style={{flex: 1}}>
      <View
        style={{
          marginTop: 70,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 3,
        }}>
        <Image style={styles.headerImg} source={{uri: profileData.image_url}} />
        <View>
          <Text style={styles.headerNameText}>{profileData.name}</Text>
          <Text style={styles.headerCountText}>
            {profileData.followers_count} followers
          </Text>
        </View>
      </View>
      <Text style={styles.yourPlaylistText}>Your Playlist</Text>

      <ScrollView>
        {profileData.public_playlists.map(song => (
          <View
            style={{
              marginTop: 8,
              width: '100%',
              flexDirection: 'row',
              gap: 10,
              paddingVertical: 14,
              alignItems: 'center',
            }}
            key={song.uri}>
            <Image
              style={styles.songImg}
              source={{uri: 'https://picsum.photos/200'}}
            />
            <View>
              <Text style={styles.songName}>{song.name}</Text>
              <Text style={styles.songCount}>
                {song.followers_count} followers
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </LinearGradient>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  headerImg: {
    width: 70,
    height: 70,
  },
  headerNameText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
  headerCountText: {
    color: 'gray',
    fontSize: 18,
  },
  yourPlaylistText: {
    marginTop: 24,
    fontSize: 27,
    fontWeight: '500',
    color: 'white',
  },
  songImg: {
    width: 70,
    height: 70,
    borderRadius: 6,
  },
  songName: {
    color: 'white',
    fontSize: 20,
  },
  songCount: {
    color: 'gray',
    fontSize: 18,
  },
});
