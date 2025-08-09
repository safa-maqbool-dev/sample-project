import React from "react";
import { element } from "../../base/element";

export const pageGenerator = (elements: element[]) => {
  return (
    <>
      {elements.map((el, i) => (
        <div key={i}>{el.renderElement()}</div>
      ))}
    </>
  );
};
