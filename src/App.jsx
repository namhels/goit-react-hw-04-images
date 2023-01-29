import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import getImages from './utils/';
import BtnLoadMore from 'components/Button';
import ImageGallery from 'components/ImageGallery';
import Loader from 'components/Loader';
import Searchbar from 'components/Searchbar';

export const App = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!inputValue) {
      return;
    };
    getItems(inputValue, page);
  }, [inputValue, page]);

  const handleSubmit = (inputValue) => {
    if (inputValue.trim() === '') {
    toast.error(`Please enter query`);
    return;
    };
    setItems([]);
    setInputValue(inputValue.trim());
    setPage(1);
  };

  const getItems = async (inputValue, page ) => {
    try {
      setIsLoading(true);
      const { hits, totalHits } = await getImages(inputValue, page);

      if (totalHits === 0) {
        toast.warn(`No results were found for your search :( Please enter another query`);
        return;
      };

      if (page === 1) {
        toast.success(`We found ${totalHits} images for your search`);
      };

      if (hits.length < 12 && page !== 1) {
        toast.info(`We're sorry, but you've reached the end of search results`);
      };

      setItems(prevItems => [...prevItems, ...hits]);
      setTotalHits(totalHits);

    } catch (error) {
      toast.error(`Ouch! Something went wrong :( Reload the page and try again!`);

    } finally {
    setIsLoading(false);
    };
  };

  const LoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

// =======<<< Avoid Nested Ternary Operators >>>=========
  const LoaderOrLoadMore = ({ isLoading, isLoadMore }) => {
    if (isLoading) {
      return <Loader />
    };
    if (isLoadMore) {
      return <BtnLoadMore onClick={LoadMore}>Load more</BtnLoadMore>
    };
    return null;
  };

  const isLoadMore = items.length && items.length < totalHits;

  return (
    <>
      <Searchbar
        onSubmit={handleSubmit}
      />
      <ImageGallery items={items} />
      <LoaderOrLoadMore
        isLoading={isLoading}
        isLoadMore={isLoadMore}
      />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default App;


