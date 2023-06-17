import * as React from "react";
import { type ComponentMeta, type ComponentStory } from "@storybook/react";

import { FilterAndSort } from ".";

export default {
  title: "FilterAndSort",
  component: FilterAndSort,
} as ComponentMeta<typeof FilterAndSort>;

const Template: ComponentStory<typeof FilterAndSort> = (args) => (
  <FilterAndSort {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
