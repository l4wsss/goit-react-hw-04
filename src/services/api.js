import axios from "axios";
// ?client_id=biF-GOrVl29E1xs41smlXKBo8TcN-tEGtuWfTwCGaJk

const fetchPhoto = async (query) => {
  const { data } = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=biF-GOrVl29E1xs41smlXKBo8TcN-tEGtuWfTwCGaJk&query=${query}`
  );
  return data;
};

export default fetchPhoto;
