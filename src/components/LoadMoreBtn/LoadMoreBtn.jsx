import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <button id="loadMore" className={css.loadMore} onClick={onLoadMore}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
