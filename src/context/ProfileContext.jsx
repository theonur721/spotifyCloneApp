import axios from 'axios';
import {createContext, useEffect, useState} from 'react';

const ProfileContext = createContext();

const ProfileProvider = ({children}) => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getProfileData = async () => {
    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/user_profile/',
      params: {
        id: 'nocopyrightsounds',
        playlistLimit: '10',
        artistLimit: '10',
      },
      headers: {
        'x-rapidapi-key': 'b3836d07f3msh27fcb24a288ab1bp1aaa36jsn86e8a79a5dbd',
        'x-rapidapi-host': 'spotify23.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      const data = response.data;
      setProfileData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <ProfileContext.Provider value={{profileData, loading, error}}>
      {children}
    </ProfileContext.Provider>
  );
};

export {ProfileContext, ProfileProvider};
