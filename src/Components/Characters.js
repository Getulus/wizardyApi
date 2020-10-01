import React, { useState, useContext } from "react";
import { CharacterContext } from "./GetCharacters";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";
import CharacterDetails from "./CharacterDetails";

const CharacterFinder = (props) => {
  const [characters] = useContext(CharacterContext);
  const [CharacterName, setCharacterName] = useState("");

  const handleChange = (event) => {
    setCharacterName(event.target.value);
    console.log(CharacterName);
  };

  const renderSearched = (character) => {
    if (character.house !== undefined) {
      if (
        character.name.toLowerCase().includes(CharacterName.toLowerCase()) ||
        CharacterName === "" ||
        character.house.toLowerCase().includes(CharacterName.toLowerCase())
      ) {
        return (
          <div style={{ textAlign: "center" }}>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={"/characters/" + character.name}
            >
              <CharacterDiv>
                {character.name}
                {"\n"}
                <Route path={"/characters/" + character.name}>
                  <CharacterDetails character={character} />
                </Route>
              </CharacterDiv>
            </Link>
          </div>
        );
      } else {
        return null;
      }
    }
    return null;
  };

  const CharacterDiv = styled.div`
    padding: 10px;
    width: min-content;
    border: dashed 1px;
    border-radius: 25px;
    margin: 5px;
    float: center;
    width: 170px;
    text-align: center;
    &:hover {
      background-color: cornflowerblue;
    }
  `;

  const ContainerDiv = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    margin: auto;
  `;

  let content = (
    <React.Fragment>
      <div style={{ textAlign: "center", margin: "auto" }}>
        <input
          style={{ margin: "30px", width: "600px" }}
          type="text"
          onChange={handleChange}
        />
        <ContainerDiv>
          {characters.map((character) => renderSearched(character))}
        </ContainerDiv>
      </div>
    </React.Fragment>
  );

  return content;
};
export default CharacterFinder;
