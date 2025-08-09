import { element } from "./element";
import { elementType } from "../enums/elementTypeEnum";
import { elementCategory } from "../enums/elementCategoryEnum";

export class interactionElement extends element {
  elementType: elementType;
  elementCategory: elementCategory;

  constructor(
    elementType: elementType,
    elementCategory: elementCategory,
    id: string,
    name: string,
    title: string,
    hidden: boolean = false,
    disabled: boolean = false
  ) {
    super(id, name, title, hidden, disabled);
    this.elementType = elementType;
    this.elementCategory = elementCategory;
  }
}
