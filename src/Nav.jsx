import Button from "react-bootstrap/Button";

function Nav(props) {
  return (
    <div id="nav-list">
      <Button
        className="cormorant-infant-regular"
        variant="link"
        onClick={props.cat}
      >
        Sweets
      </Button>
      <Button
        className="cormorant-infant-regular"
        variant="link"
        onClick={props.cat}
      >
        Animals
      </Button>
      <Button
        className="cormorant-infant-regular"
        variant="link"
        onClick={props.cat}
      >
        Imaginary
      </Button>
      <Button
        className="cormorant-infant-regular"
        variant="link"
        onClick={props.cat}
      >
        Cozy
      </Button>
      <Button
        className="cormorant-infant-regular"
        variant="link"
        onClick={props.cat}
      >
        Flowers
      </Button>
    </div>
  );
}

export default Nav;
