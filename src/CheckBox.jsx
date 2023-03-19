import React, { useState } from "react";

const CheckBox = () => {
  const [numChecked, setNumChecked] = useState(0);

  const handleChange = (e) => {
    if (e.target.checked) {
      setNumChecked(numChecked + 1);
    } else {
      setNumChecked(numChecked - 1);
    }
  };

  return (
    <div>
      <label>
        <input
          className="accent-green-400"
          type="checkbox"
          onChange={handleChange}
        />{" "}
        BMW <br />
        <input
          className="accent-green-400"
          type="checkbox"
          onChange={handleChange}
        />{" "}
        MERCEDES <br />
        <input
          className="accent-green-400"
          type="checkbox"
          onChange={handleChange}
        />{" "}
        AUDI <br />
      </label>
      <h3>Count : {numChecked} / 3</h3>
      <div>
        <input
          className="accent-green-400"
          type="range"
          name=""
          id=""
          min={0}
          value={numChecked}
          max={3}
        />
      </div>
    </div>
  );
};

export default CheckBox;
