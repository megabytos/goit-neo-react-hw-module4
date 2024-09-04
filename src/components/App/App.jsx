import { useState, useRef, useEffect } from 'react';
import fetchData from '../../api/unsplash';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import { Toaster } from 'react-hot-toast';
import './App.css';

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const totalPages = useRef(0);
  const imagesLoaded = useRef(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalData, setModalData] = useState(null);
  const scrollRef = useRef();
  const perPage = 12;

  useEffect(() => {
    if (!query) return;
    async function fetchImages() {
      try {
        setError(false);
        setLoading(true);
        const response = await fetchData(query, page, perPage);        
        if (!response?.results?.length) {
          setError('Images Not found');
        } else {
          totalPages.current = response.total_pages;
          imagesLoaded.current = response.results.length;
          setImages(prevImages => [...prevImages, ...response.results]);
          if (scrollRef?.current && page > 1) {
            setTimeout(() => {
              scrollRef.current.scrollIntoView({ behavior: 'smooth' });
            }, 300);
          }
        }
      } catch (error) {
        setError('Failed to fetch images');
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, [query, page]);

  const onSearch = text => {
    setImages([]);
    setPage(1);
    setQuery(text);
  };

  const onLoadMore = () => {
    setPage(page + 1);
  };

  const onModalOpen = data => {
    setModalData(data);
  };

  const onModalClose = () => {
    setModalData(null);
  };

  return (
    <>
      <SearchBar onSearch={onSearch} />
      {error !== false && <ErrorMessage>{error}</ErrorMessage>}
      {images.length > 0 && <ImageGallery images={images} onModalOpen={onModalOpen} scrollRef={scrollRef} imagesLoaded={imagesLoaded.current} />}
      {loading && <Loader />}
      {images.length > 0 && page < totalPages.current && <LoadMoreBtn onLoadMore={onLoadMore}/>}
      {!!modalData && <ImageModal modalData={modalData} onModalClose={onModalClose} />}
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
    </>
  );
};

export default App;
