import axios from 'axios';
import {createContext, useEffect, useState} from 'react';

const AlbumsContext = createContext();

const AlbumsProvider = ({children}) => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAlbums = async () => {
    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/search/',
      params: {
        q: 'Türkiye',
        type: 'albums',
        offset: '0',
        limit: '10',
        numberOfTopResults: '5',
      },
      headers: {
        'x-rapidapi-key': 'b3836d07f3msh27fcb24a288ab1bp1aaa36jsn86e8a79a5dbd',
        'x-rapidapi-host': 'spotify23.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      const albumItems = response.data?.albums?.items?.map(item => ({
        uri: item.data.uri,
        name: item.data.name,
        artist: item.data.artists.items[0].profile.name,
        coverArt: item.data.coverArt.sources[0].url,
        year: item.data.date.year,
      }));
      setAlbums(albumItems);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAlbums();
  }, []);

  return (
    <AlbumsContext.Provider value={{albums, loading, error}}>
      {children}
    </AlbumsContext.Provider>
  );
};

export {AlbumsProvider, AlbumsContext};
