import React from "react";

const SpellDetail = (props) => {
  const { spell } = props;

  let content = (
    <div>
      <p>{spell.effect}</p>
    </div>
  );

  return content;
};

export default SpellDetail;
