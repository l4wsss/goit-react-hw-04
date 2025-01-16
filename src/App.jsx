import { useEffect, useState } from "react";
import fetchPhoto from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import toast from "react-hot-toast";
import ImageModal from "./components/ImageModal/ImageModal";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false); // Стан для відкриття модалки
  const [modalContent, setModalContent] = useState(""); // Контент модалки
  useEffect(() => {
    const getPhotosData = async () => {
      if (!query.trim()) {
        return toast.error("Поле не може бути порожнім!");
      }

      try {
        setIsError(false);
        setIsLoading(true);
        const { results } = await fetchPhoto(query, page);
        setPhotos((prev) => [...prev, ...results]);
      } catch (err) {
        setIsError(true);
        console.log(err);
        toast.error("Помилка при завантаженні даних");
      } finally {
        setIsLoading(false);
      }
    };
    getPhotosData();
  }, [query, page]);

  const handleChangeQuery = (newQuery) => {
    if (newQuery !== query) {
      setQuery(newQuery);
      setPhotos([]);
      setPage(1);
    }
  };

  const handleLoadMore = (e) => {
    e.preventDefault();
    setPage(page + 1);
  };

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <SearchBar onSearchChanged={handleChangeQuery} />
      <ImageGallery photos={photos} openModal={openModal} />
      {photos.length > 0 ? (
        <LoadMoreBtn handleLoadMore={handleLoadMore} />
      ) : null}

      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      {isModalOpen && (
        <ImageModal
          closeModal={closeModal}
          isModalOpen={isModalOpen}
          modalContent={modalContent}
        />
      )}
    </div>
  );
};

export default App;
