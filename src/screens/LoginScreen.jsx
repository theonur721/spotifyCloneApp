import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
// icon imports
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient colors={['#000000', '#1A1A1A']} style={{flex: 1}}>
      <SafeAreaView>
        <View style={{height: 80}} />
        <Entypo
          name="spotify"
          color="white"
          size={85}
          style={{textAlign: 'center'}}
        />
        <Text style={styles.millions}>Millions of Songs Free on Spotify!</Text>
        <View style={{height: 70}} />

        <Pressable
          onPress={() => navigation.navigate('Main')}
          style={styles.signBtn}>
          <Text style={styles.sign}>Sign in with Spotify</Text>
        </Pressable>

        <Pressable style={styles.btn}>
          <MaterialIcons name="phone-iphone" color="white" size={24} />
          <Text style={styles.btnText}>Continue with phone number</Text>
        </Pressable>

        <Pressable style={styles.btn}>
          <AntDesign name="google" color="white" size={24} />
          <Text style={styles.btnText}>Continue with Google</Text>
        </Pressable>

        <Pressable style={styles.btn}>
          <AntDesign name="facebook-square" color="white" size={24} />
          <Text style={styles.btnText}>Continue with Facebook</Text>
        </Pressable>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  millions: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 40,
    marginTop: 40,
  },
  signBtn: {
    backgroundColor: '#1DB954',
    padding: 10,
    borderRadius: 30,
    marginHorizontal: 45,
  },
  sign: {
    fontWeight: '600',
    fontSize: 16,
    marginHorizontal: 'auto',
  },
  btn: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'gray',
    marginHorizontal: 45,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontWeight: '400',
    color: 'lightgrey',
    fontSize: 16,
    marginHorizontal: 'auto',
  },
});
