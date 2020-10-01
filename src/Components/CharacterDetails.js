import React from "react";

const CharacterDetails = (props) => {
  const { character } = props;

  let content = (
    <div>
      <p>{character.role}</p>
      <p>{character.house}</p>
      <p>{character.bloodStatus}</p>
      <p>{character.species}</p>
    </div>
  );

  return content;
};

export default CharacterDetails;
