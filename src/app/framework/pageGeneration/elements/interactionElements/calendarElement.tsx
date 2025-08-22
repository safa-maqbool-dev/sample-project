import { JSX } from "react";
import { interactionElement } from "../../core/base/interactionElement";

import {
  Calendar,
  ICalendarProps,
  defaultCalendarStrings,
} from "@fluentui/react";
import { elementCategory } from "../../core/enums/elementCategoryEnum";
import { elementType } from "../../core/enums/elementTypeEnum";

export class CalendarElement extends interactionElement {
  props: ICalendarProps;

  constructor(
    id: string,
    name: string,
    title: string,
    props: ICalendarProps = {}
  ) {
    super(elementType.calendar, elementCategory.interaction, id, name, title);
    this.props = props;
  }

  renderElement(): JSX.Element {
    return (
      <Calendar
        strings={defaultCalendarStrings}
        showGoToToday
        {...this.props}
      />
    );
  }
}
