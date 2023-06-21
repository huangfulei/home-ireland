import * as React from "react";
import { type ComponentMeta, type ComponentStory } from "@storybook/react";

import { ItemDetailModal } from ".";

export default {
  title: "ItemDetailModal",
  component: ItemDetailModal,
} as ComponentMeta<typeof ItemDetailModal>;

const Template: ComponentStory<typeof ItemDetailModal> = (args) => (
  <ItemDetailModal {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
