import React, { useState, useContext } from "react";
import { SpellContext } from "./GetDatabase";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";
import SpellDetail from "./SpellDetail";

const SpellFinder = (props) => {
  const [spells] = useContext(SpellContext);
  const [spellName, setSpellName] = useState("");

  const handleChange = (event) => {
    setSpellName(event.target.value);
    console.log(spellName);
  };

  const renderSearched = (spell) => {
    if (
      spell.spell.toLowerCase().includes(spellName.toLowerCase()) ||
      spellName === "" ||
      spell.effect.toLowerCase().includes(spellName.toLowerCase())
    ) {
      return (
        <div style={{ textAlign: "center" }}>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={"/spell-finder/" + spell.spell}
          >
            <SpellDiv>
              {"(" + spell.type + ")"}
              {"\n"}
              {spell.spell}
              {"\n"}
              <Route path={"/spell-finder/" + spell.spell}>
                <SpellDetail spell={spell} />
              </Route>
            </SpellDiv>
          </Link>
        </div>
      );
    } else {
      return null;
    }
  };

  const SpellDiv = styled.div`
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
          {spells.map((spell) => renderSearched(spell))}
        </ContainerDiv>
      </div>
    </React.Fragment>
  );

  return content;
};
export default SpellFinder;
