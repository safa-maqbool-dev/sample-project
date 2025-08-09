import { interactionElement } from "../../core/base/interactionElement";
import { elementType } from "../../core/enums/elementTypeEnum";
import { elementCategory } from "../../core/enums/elementCategoryEnum";
import { JSX } from "react";
import { PrimaryButton, IButtonProps } from "@fluentui/react";

export class buttonElement extends interactionElement {
  props: IButtonProps;

  constructor(
    id: string,
    name: string,
    title: string,
    props: IButtonProps = {}
  ) {
    super(elementType.button, elementCategory.interaction, id, name, title);
    this.props = props;
  }

  renderElement(): JSX.Element {
    // Possible props: text, ariaDescription, allowDisabledFocus, checked, className, componentRef, ...
    return <PrimaryButton {...this.props}>{this.props.children}</PrimaryButton>;
  }
}
