import Button from "react-bootstrap/Button";

function Search(props) {
  return (
    <div id="search">
      <input
        className="overlock-regular"
        onChange={props.change}
        type="text"
        value={props.value}
        placeholder="Search"
      />
      <Button variant="light" onClick={props.click}>
        Search
      </Button>
    </div>
  );
}
export default Search;
