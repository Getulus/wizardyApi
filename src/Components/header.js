import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <Head>
      <img
        style={{ float: "left", height: "130px", width: "230px" }}
        src="https://u.cubeupload.com/DancerRJV/HarryPotter.jpg"
        alt="HPlogo"
      ></img>
      <img
        style={{ float: "right", height: "130px", width: "230px" }}
        src="https://images.ctfassets.net/usf1vwtuqyxm/1uzo3DWrgwqEsWOWiYUoEA/2127408dc271e6e7f2ed009359ccbcaf/WW_Hero_Image.jpg?fm=jpg"
        alt="HPlogo"
      ></img>
      <h1>Harry Potter Database</h1>
      <Link style={linkStyle} to="/houses">
        Houses
      </Link>
      {"  "}|{"  "}
      <Link style={linkStyle} to="/characters">
        Characters
      </Link>
      {"  "}|{"  "}
      <Link style={linkStyle} to="/spell-finder">
        Spell Finder
      </Link>
    </Head>
  );
}

const Head = styled.header`
  background: black;
  color: white;
  text-align: center;
  padding: 20px;
  margin-bottom: 15px;
`;

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "large",
};

export default Header;
