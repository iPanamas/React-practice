import axios from 'axios';

const fetchArticlesWithQuery = async searchQuery => {
  const response = await axios.get(`/search?query=${searchQuery}`);
  console.log(response.data.hits);
  return response.data.hits;
};

export default {
  fetchArticlesWithQuery,
};
