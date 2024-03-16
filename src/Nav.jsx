import Button from "react-bootstrap/Button";

function Nav(props) {
  return (
    <div id="nav-list">
      <Button variant="light" onClick={props.cat}>
        Sweets
      </Button>
      <Button variant="light" onClick={props.cat}>
        Animals
      </Button>
      <Button variant="light" onClick={props.cat}>
        Imaginary
      </Button>
      <Button variant="light" onClick={props.cat}>
        Cozy
      </Button>
      <Button variant="light" onClick={props.cat}>
        Flowers
      </Button>
    </div>
  );
}

export default Nav;
