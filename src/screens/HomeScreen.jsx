import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';
// icon imports
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ArtistContext} from '../context/ArtistsContext';
import ArtistsCard from '../components/ArtistsCard';
import {AlbumsContext} from '../context/AlbumsContext';
import AlbumsCard from '../components/AlbumsCard';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const {loading, error, artists} = useContext(ArtistContext);
  const {
    loading: albumsLoading,
    error: albumsError,
    albums,
  } = useContext(AlbumsContext);

  return (
    <LinearGradient colors={['#000000', '#1A1A1A']} style={{flex: 1}}>
      <ScrollView
        style={{marginTop: 70}}
        contentContainerStyle={{paddingBottom: 100}}>
        <View style={styles.userContainer}>
          <View style={styles.messageContainer}>
            <FontAwesome name="user-circle-o" color="white" size={40} />
            <Text style={styles.messageText}>message</Text>
          </View>
          <MaterialCommunityIcons
            name="lightning-bolt"
            color="white"
            size={24}
          />
        </View>

        <View style={styles.musicPodcastContainer}>
          <Pressable style={styles.musicPodcastBtn}>
            <Text style={styles.musicPodcastText}>Music</Text>
          </Pressable>
          <Pressable style={styles.musicPodcastBtn}>
            <Text style={styles.musicPodcastText}>Podcast & Shows</Text>
          </Pressable>
        </View>

        <View style={{marginVertical: 7}}>
          <Pressable
            onPress={() => navigation.navigate('Liked')}
            style={styles.likedSongs}>
            <LinearGradient colors={['#33006F', '#FFFFFF']}>
              <Pressable
                style={{
                  width: 55,
                  height: 55,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <AntDesign name="heart" color="white" size={24} />
              </Pressable>
            </LinearGradient>
            <Text style={styles.threeDivText}>Liked Songs</Text>
          </Pressable>

          <Pressable style={styles.likedSongs}>
            <View>
              <Pressable
                style={{
                  width: 55,
                  height: 55,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../assets/fhardy.jpg')} // require kullanarak import
                  style={{width: '100%', height: '100%'}}
                />
              </Pressable>
            </View>
            <Text style={styles.threeDivText}>Francoise Hardy</Text>
          </Pressable>

          <Pressable style={styles.likedSongs}>
            <LinearGradient colors={['#33006F', '#FFFFFF']}>
              <Pressable
                style={{
                  width: 55,
                  height: 55,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../assets/hardyf.jpg')} // require kullanarak import
                  style={{width: '100%', height: '100%'}}
                />
              </Pressable>
            </LinearGradient>
            <Text style={styles.threeDivText}>Rock-Roll</Text>
          </Pressable>
        </View>

        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 22,
            marginTop: 5,
            marginBottom: 3,
          }}>
          Your Top Artists
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {artists.map((artist, index) => (
            <ArtistsCard key={index} artist={artist} />
          ))}
        </ScrollView>

        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 22,
            marginTop: 20,
          }}>
          Popular Albums
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {albums?.map((album, index) => (
            <AlbumsCard key={index} album={album} />
          ))}
        </ScrollView>
      </ScrollView>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
  },
  musicPodcastContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 5,
    gap: 10,
  },
  musicPodcastBtn: {
    backgroundColor: '#333333',
    padding: 10,
    borderRadius: 30,
  },
  musicPodcastText: {
    color: 'white',
    fontWeight: 'bold',
  },
  likedSongs: {
    marginVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#333333',
  },
  threeDivText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
});
