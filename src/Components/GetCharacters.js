import React, { useEffect, useState, createContext } from "react";
import axios from "axios";

export const CharacterContext = createContext();

export const CharacterProvider = (props) => {
  const [characters, setCharacters] = useState([]);

  const access_token =
    "$2a$10$NIzYr3SXZ603ESJWL5zXIuReymCq2K9QSmFnAKmE90nJxnU7uFkj.";

  useEffect(() => {
    axios
      .get(`https://www.potterapi.com/v1/characters/?key=${access_token}`)
      .then((res) => {
        setCharacters(res.data);
      });
  }, []);

  return (
    <CharacterContext.Provider value={[characters, setCharacters]}>
      {props.children}
    </CharacterContext.Provider>
  );
};
