import css from './SearchBar.module.css';
import toast from 'react-hot-toast';
import { IoSearch } from 'react-icons/io5';

export default function SearchBar({ onSearch }) {
  const onSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.query.value.trim().toLowerCase();
    const validQuery = value && value.length;
    if (!validQuery) {
      toast.error('Please enter a search value!', { className: css.error });
      return;
    }
    onSearch(value);
    e.target.reset();
  };
  return (
    <header>
      <form className={css.searchForm} onSubmit={onSubmit}>
        <input
          type="text"
          name="query"
          className={css.searchInput}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.searchButton} type="submit">
          <IoSearch />
        </button>
      </form>
    </header>
  );
}
