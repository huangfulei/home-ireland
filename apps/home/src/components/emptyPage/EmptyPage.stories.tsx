import * as React from "react";
import { type ComponentMeta, type ComponentStory } from "@storybook/react";

import { EmptyPage } from ".";

export default {
  title: "EmptyPage",
  component: EmptyPage,
} as ComponentMeta<typeof EmptyPage>;

const Template: ComponentStory<typeof EmptyPage> = (args) => (
  <EmptyPage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
