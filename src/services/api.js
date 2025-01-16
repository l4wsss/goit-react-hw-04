import axios from "axios";
// ?client_id=biF-GOrVl29E1xs41smlXKBo8TcN-tEGtuWfTwCGaJk

const fetchPhoto = async (query, page) => {
  const { data } = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=biF-GOrVl29E1xs41smlXKBo8TcN-tEGtuWfTwCGaJk&query=${query}&page=${page}&per_page=12`
  );
  return data;
};

export default fetchPhoto;
