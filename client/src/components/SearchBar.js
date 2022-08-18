const SearchBar = ({ searchText, setSearchText }) => {
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="searchItem">Enter Keyword:</label>
          <input
            type="text"
            className="form-control"
            id="searchItem"
            aria-describedby="emailHelp"
            placeholder="Enter Keyword"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
