import { useEffect, useRef } from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { isDarkTheme, setSearchText } = useGlobalContext();

  const submitHandler = (e) => {
    e.preventDefault();
    // we are listening for form submission (not the input)
    // an alternative way that we don't have to control input
    // console.log(e.target.elements);
    const searchValue = e.target.elements.search.value;

    // 沒有輸入的 input時，return empty string
    if (!searchValue) return;

    // console.log(searchValue);
    setSearchText(searchValue);
  };

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={submitHandler}>
        <input
          type="text"
          name="search"
          placeholder="cat"
          ref={inputRef}
          className={
            isDarkTheme
              ? "form-input search-input dark-theme"
              : "form-input search-input"
          }
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
