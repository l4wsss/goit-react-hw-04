import { useEffect, useState } from "react";
import s from "./App.module.css";
import fetchPhoto from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import toast from "react-hot-toast";
import Modal from "react-modal";

Modal.setAppElement("#root");

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
    setModalContent(content); // Встановлюємо контент для модалки
    setIsModalOpen(true); // Відкриваємо модалку
  };

  const closeModal = () => setIsModalOpen(false); // Закриваємо модалку

  return (
    <div>
      <SearchBar onSearchChanged={handleChangeQuery} />
      <ImageGallery photos={photos} openModal={openModal} />
      {query.trim() && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Photo Modal"
          className={s.modalContent} // Клас для кастомізації стилів
          overlayClassName={s.modalOverlay} // Клас для overlay (фон за модалкою)
        >
          <div className={s.container}>
            <button onClick={closeModal} className={s.button}>
              Close
            </button>
            <img src={modalContent} alt="Modal content" className={s.img} />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default App;
