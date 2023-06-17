import * as React from "react";
import { type ComponentMeta, type ComponentStory } from "@storybook/react";

import { Checkbox } from ".";

export default {
  title: "Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  value: "checkbox",
};
