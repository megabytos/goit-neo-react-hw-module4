import axios from 'axios';
axios.defaults.baseURL = 'https://api.unsplash.com/';
const API_KEY = import.meta.env.VITE_API_ACCESS_KEY_UNSPLASH;

const fetchData = async (query, page = 1, per_page = 10) => {
  if (query) {
    const { data } = await axios.get('search/photos', {
      params: {
        query,
        page,
        per_page,
        orientation: 'landscape',
      },
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    });
    return data;
  }
};

export default fetchData;
