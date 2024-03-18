import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function ButtonReactions() {
  const [hoveredButton, setHoveredButton] = useState(null);

  // Function to handle mouse enter event
  const handleMouseEnter = (buttonId) => {
    setHoveredButton(buttonId);
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    setHoveredButton(null); // Reset hovered button when mouse leaves
  };

  // Function to get the appropriate image source based on the button id
  const getImageSource = (buttonId) => {
    switch (buttonId) {
      case "love":
        return "../icons/love.png";
      case "download":
        return "../icons/download.png";
      case "thumb-up":
        return "../icons/thumb-up.png";
      default:
        return "";
    }
  };
  const handleClick = (buttonId) => {
    buttonId === hoveredButton ? console.log(getImageSource(buttonId)) : null;
  };

  return (
    <div id="btnReactions">
      <Button
        variant="link"
        onMouseEnter={() => handleMouseEnter("love")}
        onMouseLeave={handleMouseLeave}
        onClick={() => {
          handleClick("love");
        }}
      >
        <img
          id="love"
          src={
            hoveredButton === "love"
              ? "../icons/heart.png"
              : getImageSource("love")
          }
          alt=""
        ></img>
      </Button>
      <Button
        variant="link"
        onMouseEnter={() => handleMouseEnter("download")}
        onMouseLeave={handleMouseLeave}
        onClick={() => {
          handleClick("download");
        }}
      >
        <img
          id="download"
          src={
            hoveredButton === "download"
              ? "../icons/do-download.png"
              : getImageSource("download")
          }
          alt=""
        ></img>
      </Button>
      <Button
        variant="link"
        onMouseEnter={() => handleMouseEnter("thumb-up")}
        onMouseLeave={handleMouseLeave}
        onClick={() => {
          handleClick("thumb-up");
        }}
      >
        <img
          id="thumb-up"
          src={
            hoveredButton === "thumb-up"
              ? "../icons/like.png"
              : getImageSource("thumb-up")
          }
          alt=""
        ></img>
      </Button>
    </div>
  );
}

export default ButtonReactions;
