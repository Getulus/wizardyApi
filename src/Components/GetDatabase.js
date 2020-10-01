import React, { useEffect, useState, createContext } from "react";
import axios from "axios";

export const SpellContext = createContext();

export const SpellProvider = (props) => {
  const [spells, setSpells] = useState([]);

  const access_token =
    "$2a$10$NIzYr3SXZ603ESJWL5zXIuReymCq2K9QSmFnAKmE90nJxnU7uFkj.";

  useEffect(() => {
    axios
      .get(`https://www.potterapi.com/v1/spells/?key=${access_token}`)
      .then((res) => {
        setSpells(res.data);
      });
  }, []);

  return (
    <SpellContext.Provider value={[spells, setSpells]}>
      {props.children}
    </SpellContext.Provider>
  );
};
