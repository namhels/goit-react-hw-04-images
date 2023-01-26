import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import getImages from './utils/';
import LoadMore from 'components/Button/Button';
import ImageGallery from 'components/ImageGallery';
import Loader from 'components/Loader';
import Searchbar from 'components/Searchbar';

class App extends Component {
  state = {
    items: [],
    isLoading: false,
    inputValue: '',
    page: 1,
    totalHits: 0,
  };
// 888888888888888888
  handleSubmit = (inputValue) => {
    this.setState({
      inputValue,
      items: [],
      page: 1,
    });
  };

  componentDidUpdate(_, prevState) {
    const { inputValue, page } = this.state;
    if (prevState.inputValue !== inputValue || prevState.page !== page) {
      this.getItems(inputValue, page );
    };
  };

  getItems = async (inputValue, page ) => {
    try {
      this.setState({ isLoading: true });
      const { hits, totalHits } = await getImages(inputValue, page);

      // if (!inputValue) {
      //   toast.error(`Please enter query`);
      //   return;
      // };

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

      this.setState(({items}) => ({
        items: [...items, ...hits],
        totalHits,
      }));

    } catch (error) {
      toast.error(`Ouch! Something went wrong :( Reload the page and try again!`);

    } finally {
    this.setState({ isLoading: false });
    };
  };

  LoadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };

  // =======<<< Avoid Nested Ternary Operators >>>=========
  LoaderOrLoadMore = ({ isLoading, isLoadMore }) => {
    if (isLoading) {
      return <Loader />
    };
    if (isLoadMore) {
      return <LoadMore onClick={this.LoadMore}>Load more</LoadMore>
    };
    return null;
  };

  render() {
    const { items, isLoading, totalHits } = this.state;
    const LoaderOrLoadMore = this.LoaderOrLoadMore;
    return (
      <>
        <Searchbar
          onSubmit={this.handleSubmit}
        />
        <ImageGallery items={items} />
        <LoaderOrLoadMore
          isLoading={isLoading}
          isLoadMore={items.length && items.length < totalHits}
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
};

export default App;


