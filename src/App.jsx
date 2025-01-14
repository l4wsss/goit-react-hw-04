import { useEffect, useState } from "react";
import fetchPhoto from "./services/api";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("cat");

  useEffect(() => {
    const getPhotosData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const { results } = await fetchPhoto(query);
        setPhotos([...results]);
      } catch (err) {
        setIsError(true);
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    getPhotosData();
  }, [query]);

  const handleChangeQuery = (NewQuery) => {
    setQuery(NewQuery);
  };

  return (
    <>
      <SearchBar onSearchChanged={handleChangeQuery} />
      <ImageGallery photos={photos} />
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
    </>
  );
};

export default App;
