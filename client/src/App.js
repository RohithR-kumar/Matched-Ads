import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import SearchBar from "./components/SearchBar";

function App() {
  const [items, setItems] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:5000/matchedAds?searchText=${searchText}`
      );
      const data = await response.json();
      setItems((previousValue) => data.data);
    };
    fetchData();
  }, [searchText]);

  return (
    <div>
      <h2>Search Ads</h2>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <Cards items={items} />
    </div>
  );
}

export default App;
