import * as React from "react";
import { type ComponentMeta, type ComponentStory } from "@storybook/react";

import { ItemStackContainer } from ".";

export default {
  title: "ItemStack",
  component: ItemStackContainer,
} as ComponentMeta<typeof ItemStackContainer>;

const Template: ComponentStory<typeof ItemStackContainer> = (args) => (
  <ItemStackContainer {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  items: [],
};
