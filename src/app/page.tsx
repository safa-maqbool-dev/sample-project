"use client";

import { IButtonProps, ICalendarProps } from "@fluentui/react";
import { buttonElement } from "./framework/pageGeneration/elements/interactionElements/buttonElement";
import { useState } from "react";
import { CalendarElement } from "./framework/pageGeneration/elements/interactionElements/calendarElement";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

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

  const calendar = new CalendarElement("cal1", "calendar", "Calendar", {
    value: selectedDate,
    onSelectDate: (date) => setSelectedDate(date!),
  } as ICalendarProps);
  return (
    <>
      <div style={{ display: "flex", gap: "10px" }}>
        {saveButton.renderElement()}
        {cancelButton.renderElement()}
      </div>
      <div>
        <h3>Pick a date:</h3>
        {calendar.renderElement()}
        <p>Selected Date: {selectedDate?.toLocaleDateString()}</p>
      </div>
    </>
  );
}
