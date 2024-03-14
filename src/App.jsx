import "./App.css";
import ImageContainer, { url } from "./image_container.jsx";
import Search from "./Search.jsx";
import Nav from "./Nav.jsx";
import { useState } from "react";

export default function App() {
 
  const [search, setSearch] = useState({ url: '' });

  const sweets = url.find((item) => {
    return item.cat === "Sweets";
  });
  const animal = url.find((item) => {
    return item.cat === "Animals";
  });
  const imaginary = url.find((item) => {
    return item.cat === "Imaginary";
  });
  const cozy = url.find((item) => {
    return item.cat === "Cozy";
  });
  const flowers = url.find((item) => {
    return item.cat === "Flowers";
  });

  const newCat = function handleClick(e) {
    const btn = e.target.innerText;

    btn === "Sweets"
      ? setSearch(() => {
          return { url: sweets.url };
        })
      : null;
    btn === "Animals"
      ? setSearch(() => {
          return {
            url: animal.url,
          };
        })
      : null;
    btn === "Imaginary"
      ? setSearch(() => {
          return { url: imaginary.url };
        })
      : null;
    btn === "Cozy"
      ? setSearch(() => {
          return { url: cozy.url };
        })
      : null;
    btn === "Flowers"
      ? setSearch(() => {
          return { url: flowers.url };
        })
      : null;
  };

  let btnClick = false;
  return (
    <main>
      <Search />
      <Nav cat={newCat} />
      <ImageContainer src={search.url} />
      {0 < url.length
        ? url.map((item) => {
            return (
              <div key={item.key}>
                {" "}
                <ImageContainer src={btnClick ? search.url : item.url} />{" "}
              </div>
            );
          })
        : null}
    </main>
  );
}
