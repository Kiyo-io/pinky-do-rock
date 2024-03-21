import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function ButtonReactions() {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [imageSrc1, setImageSrc1] = useState("../icons/love.png");
  const [imageSrc2, setImageSrc2] = useState("../icons/download.png");
  const [clickedButton, setClickedButton] = useState(null);

  // Function to handle mouse enter event
  const handleMouseEnter = (buttonId) => {
    setHoveredButton(buttonId);
    switch (buttonId) {
      case 1:
        setImageSrc1("../icons/love.png"); // Update the image source for button 1
        break;
      case 2:
        setImageSrc2("../icons/download.png"); // Update the image source for button 2
        break;
      // Add cases for additional buttons if needed
      default:
        break;
    }
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    setHoveredButton(null);
    // Reset image sources to default if not clicked
    if (clickedButton !== 1) {
      setImageSrc1("../icons/heart.png");
    }
    if (clickedButton !== 2) {
      setImageSrc2("../icons/download.png");
    }
    // Add reset for additional buttons if needed
  };

  // Function to handle click event
  const handleClick = (buttonId) => {
    // Toggle clicked state
    setClickedButton((prev) => (prev === buttonId ? null : buttonId));
    // Update image source based on the clicked state
    switch (buttonId) {
      case 1:
        setImageSrc1(
          clickedButton === 1 ? "../icons/love.png" : "../icons/love.png"
        );
        break;
      case 2:
        setImageSrc2(
          clickedButton === 2
            ? "../icons/download.png"
            : "../icons/clicked-download.png"
        );
        break;
      // Add cases for additional buttons if needed
      default:
        break;
    }
  };

  return (
    <div id="btnReactions">
      <Button
        variant="link"
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick(1)}
      >
        <img
          id="love"
          src={hoveredButton === 1 ? "../icons/heart.png" : imageSrc1}
          alt=""
        ></img>
      </Button>
      <Button
        variant="link"
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick(2)}
      >
        <img
          id="download"
          src={hoveredButton === 2 ? "../icons/do-download.png" : imageSrc2}
          alt=""
        ></img>
      </Button>
      {/* Add more reaction buttons HERE */}
    </div>
  );
}

export default ButtonReactions;
