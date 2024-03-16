import "./App.css";
import ImageContainer, { url } from "./image_container.jsx";
import Search from "./Search.jsx";
import Nav from "./Nav.jsx";
import { useState } from "react";
import Header from "./Header.jsx";
import TypesExample from "./buttons.jsx";

export default function App() {
  // Nav
  const [search, setSearch] = useState({ url: url });
  const newCat = function handleClick(e) {
    const category = e.target.innerText;
    const filteredUrls = url.filter((item) => item.cat === category);
    setSearch({ url: filteredUrls });
  };
  // Search
  const [input, setInput] = useState("");

  function handleInputChange(e) {
    const text = e.target.value;
    console.log(input);
    setInput(text);
  }
  function handleSearch() {
    const searchedUrls = url.filter((item) =>
      item.cat.toLowerCase().includes(input.toLowerCase())
    );
    console.log(searchedUrls);
    setSearch({ url: searchedUrls });
  }
  console.log(<Header />);
  return (
    <main>
      <Header />
      <Search change={handleInputChange} value={input} click={handleSearch} />
      <TypesExample />
      <Nav cat={newCat} />
      <div id="img-cont">
        {search.url.map((item) => (
          <div key={item.key}>
            <ImageContainer src={item.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
