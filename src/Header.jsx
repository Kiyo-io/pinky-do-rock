import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

function Header() {
  return (
    <div id="head">
      <a>
        <img src="../icons/menu-icon.png" alt="click to access menu bar"></img>
      </a>
      <h1>Happy Pink Gallery</h1>
      <div id="header-right">
        <a>
          <img src="../icons/not-love.png" alt="click to love the photo"></img>
        </a>

        <Image src="../icons/profile-icon.png" roundedCircle />
      </div>
    </div>
  );
}

export default Header;
