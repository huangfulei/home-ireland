import * as React from "react";
import { type ComponentMeta, type ComponentStory } from "@storybook/react";

import { ImageSlider } from ".";

export default {
  title: "ImageSlider",
  component: ImageSlider,
} as ComponentMeta<typeof ImageSlider>;

const Template: ComponentStory<typeof ImageSlider> = (args) => (
  <ImageSlider {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  images: [],
};
