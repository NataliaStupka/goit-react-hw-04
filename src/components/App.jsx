import { fetchPhoto } from '../servises/api'; //запит

import SearchBar from './SearchBar/SearchBar'; //пошук
import ImageGallery from './ImageGallery/ImageGallery'; //
import LoadMore from './LoadMore/LoadMore';
import Loader from './Loader/Loader';
import ImageModal from './ImageModal/ImageModal';

//import Modal from 'react-modal'; //npm

import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const App = () => {
  const [query, setQuery] = useState(''); //що шукаємо 'photo'
  const [images, setImages] = useState([]); //фото
  const [page, setPage] = useState(1); //current page
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [largeImage, setLargeImage] = useState(''); //для модалки велике зображення

  const openModal = largeImage => {
    setModalIsOpen(true);
    setLargeImage(largeImage);
  };
  const closeModal = () => setModalIsOpen(false);

  //Toster при nbPages === page
  useEffect(() => {
    if (totalPages === page) {
      toast.success('You already download all posts!');
    }
  }, [totalPages, page]);

  useEffect(() => {
    if (!query) {
      return;
    }
    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);

        const { results, total_pages } = await fetchPhoto(query, page); //приходить [{},{},..,{}]
        setImages(prev => [...prev, ...results]);
        setTotalPages(total_pages);
      } catch (error) {
        setIsError(true);
        console.log('❌ Error!:', error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  //--=====
  const handleSearchValue = value => {
    setImages([]); //очищаємо галерею при новому запиті
    setPage(1); //сторінку повертаємо на 1

    setQuery(value); // значення value передамо в fetch
  };

  //--LoadMore
  const handleLoadMore = () => {
    setPage(prev => prev + 1);
    // console.log('click load more');
  };

  return (
    <>
      <SearchBar onSearchValue={handleSearchValue} />
      <ImageGallery images={images} onOpenModal={openModal} />

      {isLoading && <Loader />}

      {/* якщо є що рендерити і не прийшов пустий масив */}
      {totalPages > page && images.length > 0 && (
        <LoadMore onLoadMore={handleLoadMore} />
      )}
      {isError && <h2>❌ Виникла помилка, спробуйте ще раз!</h2>}

      {modalIsOpen && (
        <ImageModal
          onClose={closeModal}
          onOpenModal={openModal}
          image={largeImage}
        ></ImageModal>
      )}
    </>
  );
};

export default App;
