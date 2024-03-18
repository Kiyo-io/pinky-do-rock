import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function Header(props) {
  return (
    <div id="head">
      <Button
        className="cormorant-infant-regular"
        variant="link"
        onClick={props.click}
      >
        Home
      </Button>
      <h1 className="cookie-regular">Happy Pink Gallery</h1>
      <div id="header-right">
        <a>
          <img src="../icons/love.png" alt="click to love the photo"></img>
        </a>

        <Image
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D"
          roundedCircle
        />
      </div>
    </div>
  );
}

export default Header;
