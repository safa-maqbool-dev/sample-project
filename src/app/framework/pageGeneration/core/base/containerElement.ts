import { element } from "./element";
import { elementType } from "../enums/elementTypeEnum";
import { elementCategory } from "../enums/elementCategoryEnum";

export class containerElement extends element {
  elementType: elementType;
  elementCategory: elementCategory;
  children: element[];

  constructor(
    elementType: elementType,
    elementCategory: elementCategory,
    id: string,
    name: string,
    title: string,
    children: element[] = [],
    hidden: boolean = false,
    disabled: boolean = false
  ) {
    super(id, name, title, hidden, disabled);
    this.elementType = elementType;
    this.elementCategory = elementCategory;
    this.children = children;
  }
}
