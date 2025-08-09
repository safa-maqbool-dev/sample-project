import { JSX } from "react";

export class element {
  id: string;
  name: string;
  title: string;
  hidden: boolean;
  disabled: boolean;

  constructor(
    id: string,
    name: string,
    title: string,
    hidden: boolean = false,
    disabled: boolean = false
  ) {
    this.id = id;
    this.name = name;
    this.title = title;
    this.hidden = hidden;
    this.disabled = disabled;
  }

  renderElement(): JSX.Element {
    return <></>;
  }
}
