"use client";

import { IButtonProps } from "@fluentui/react";
import { buttonElement } from "./framework/pageGeneration/elements/interactionElements/buttonElement";

export default function Home() {

  const saveButton = new buttonElement("btn1", "saveButton", "Save", {
    children: "Save Widget",
    onClick: () => alert("Saved!"),
    disabled: false,
  } as IButtonProps);

  const cancelButton = new buttonElement("btn2", "cancelButton", "Cancel", {
    children: "Cancel",
    onClick: () => alert("Cancelled!"),
    disabled: false,
  } as IButtonProps);

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {saveButton.renderElement()}
      {cancelButton.renderElement()}
    </div>
  );
}
