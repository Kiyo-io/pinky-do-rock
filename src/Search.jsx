import Button from "react-bootstrap/Button";

function Search(props) {
  return (
    <div id="search">
      <input
        className="overlock-regular"
        onChange={props.change}
        type="text"
        value={props.value}
        placeholder=""
      />
      <button variant="light" onClick={props.click}>
        <span class="material-symbols-outlined">search</span>
      </button>
    </div>
  );
}
export default Search;
