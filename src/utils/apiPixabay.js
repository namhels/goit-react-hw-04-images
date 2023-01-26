import axios from 'axios';

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '25272385-d3b781fb1902e693cd197cf56';

const getImages = async (inputValue, page) => {
  const queryParams = new URLSearchParams({
    key: API_KEY,
    q: inputValue,
    image_type: 'photo',
    orientation: 'horizontal',
    page,
    per_page: 12,
  });
  const response = await axios.get(`?${queryParams}`);
  return response.data;
};

export default getImages;
