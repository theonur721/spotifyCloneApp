import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SongInfoScreen = () => {
  // use route çalıştırma-navigasyon ile gelen parametreyi alma
  const route = useRoute();
  const {album} = route.params;
  // gelen verileri obje dağıtma
  const {coverArt, name, artist, year} = album;

  // geri sayfaya yönlendirme için usenavigation
  const navigation = useNavigation();

  return (
    <LinearGradient colors={['#000000', '#1A1A1A']} style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{marginTop: 70}}>
        <Ionicons color="white" size={34} name="arrow-back" />
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.songInfoContainer}>
          <Image source={{uri: coverArt}} style={styles.songCoverArt} />
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <AntDesign name="downcircle" color="#1DB954" size={34} />
            <View style={{flexDirection: 'row', gap: 30, alignItems: 'center'}}>
              <MaterialCommunityIcons
                name="camera-control"
                size={24}
                color="gray"
              />
              <AntDesign name="play" color="#1DB954" size={34} />
            </View>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={styles.songDetailsContainer}>
              <Text style={styles.songName}>Album: {name}</Text>
              <Text style={styles.songArtist}>Artist: {artist}</Text>
              <Text style={styles.songYear}>Year: {year}</Text>
            </View>
            <Entypo name="dots-three-vertical" color="white" size={34} />
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default SongInfoScreen;

const styles = StyleSheet.create({
  songInfoContainer: {
    marginTop: 20,
    gap: 30,
    padding: 20,
  },
  songCoverArt: {
    width: 300,
    height: 300,
    marginHorizontal: 'auto',
  },
  songDetailsContainer: {
    flexDirection: 'column',
    gap: 10,
  },
  songName: {
    color: 'white',
    fontWeight: '600',
    fontSize: 24,
  },
  songArtist: {
    color: 'white',
    fontSize: 20,
  },
  songYear: {
    color: 'gray',
    fontSize: 18,
  },
});
