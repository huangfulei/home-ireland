import * as React from "react";
import { type ComponentMeta, type ComponentStory } from "@storybook/react";

import { ItemCard } from ".";

export default {
  title: "ItemCard",
  component: ItemCard,
} as ComponentMeta<typeof ItemCard>;

const Template: ComponentStory<typeof ItemCard> = (args) => (
  <ItemCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
