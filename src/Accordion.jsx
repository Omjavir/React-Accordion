import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="bg-red-400 w-[90vw] block m-auto flex-col">
      <div className="bg-red-500">
        <div
          className="flex justify-between m-2 p-3"
          onClick={() => setIsActive(!isActive)}
        >
          <h3>{title}</h3>
          <h3>{isActive ? "-" : "+"}</h3>
        </div>
      </div>
      {isActive && <div className="p-3">{content}</div>}
    </div>
  );
};

export default Accordion;
