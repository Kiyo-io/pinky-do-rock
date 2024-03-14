import "./App.css";
import ImageContainer, { url } from "./image_container.jsx";
import Search from "./Search.jsx";
import Nav from "./Nav.jsx";
import { useState } from "react";

export default function App() {
  const [search, setSearch] = useState({ url: url });

  const newCat = function handleClick(e) {
    const category = e.target.innerText;
    const filteredUrls = url.filter((item) => item.cat === category);
    setSearch({ url: filteredUrls });
  };

  return (
    <main>
      <Search />
      <Nav cat={newCat} />
      {search.url.map((item) => (
        <div key={item.key}>
          <ImageContainer src={item.url} />
        </div>
      ))}
    </main>
  );
}
