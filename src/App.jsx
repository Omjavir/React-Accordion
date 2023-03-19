import React, { useState } from "react";
import Accordion from "./Accordion";
import CheckBox from "./CheckBox";

function App() {
  const accordionData = [
    {
      title: "Section 1",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
    },
    {
      title: "Section 2",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
    },
    {
      title: "Section 3",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
    },
  ];

  // const { title, content } = accordionData;

  // const [isActive, setIsActive] = useState(false);

  // const handleClick = () => {
  //   setIsActive(!isActive);
  // };

  return (
    <div>
      <h1 className="text-center text-2xl font-bold underline m-5">
        React Accordion
      </h1>
      {/* ** For single object */}
      {/* <div className="bg-red-400 w-[40vw] block m-auto flex-col">
        <div>
          <div
            className="flex justify-between border-y-2"
            onClick={handleClick}
          >
            <h3>{title}</h3>
            <h3>{isActive ? "-" : "+"}</h3>
          </div>
        </div>
        {isActive && <div>{content}</div>}
      </div> */}
      {/* ** For multiple objects */}
      {accordionData.map(({ title, content }) => (
        <Accordion title={title} content={content} />
      ))}
      <div className="flex justify-center my-20">
        <CheckBox />
      </div>
    </div>
  );
}

export default App;
