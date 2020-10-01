import React from "react";

const Banner = (props) => {
  const { banner } = props;

  const getHouseBanner = () => {
    let imgSource = "";

    if (banner === "slytherin") {
      imgSource =
        "https://ktane.timwi.de/HTML/img/Hogwarts/Slytherin%20Banner.png";
    } else if (banner === "gryffendor") {
      imgSource =
        "https://ktane.timwi.de/HTML/img/Hogwarts/Gryffindor%20Banner.png";
    } else if (banner === "hufflepuff") {
      imgSource =
        "https://ktane.timwi.de/HTML/img/Hogwarts/Hufflepuff%20Banner.png";
    } else if (banner === "ravenclaw") {
      imgSource =
        "https://ktane.timwi.de/HTML/img/Hogwarts/Ravenclaw%20Banner.png";
    }

    return (
      <img
        style={{ width: "150px", height: "550px" }}
        alt="Choose a house"
        src={imgSource}
      />
    );
  };

  let content = (
    <div style={{ width: "150px", height: "400px" }}>{getHouseBanner()}</div>
  );
  return content;
};

export default Banner;
