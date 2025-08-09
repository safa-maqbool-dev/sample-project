import { containerElement } from "../../core/base/containerElement";
import { elementType } from "../../core/enums/elementTypeEnum";
import { elementCategory } from "../../core/enums/elementCategoryEnum";
import { JSX } from "react";

export class sectionElement extends containerElement {
  constructor(id: string, name: string, title: string, children: any[] = []) {
    super(
      elementType.section,
      elementCategory.container,
      id,
      name,
      title,
      children
    );
  }

  renderElement(): JSX.Element {
    return (
      <section className="p-4 border rounded">
        <h2 className="text-lg font-bold">{this.title}</h2>
        {this.children.map((child, index) => (
          <div key={index}>{child.renderElement()}</div>
        ))}
      </section>
    );
  }
}
