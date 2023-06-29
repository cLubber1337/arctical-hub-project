import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "app/providers/ThemeProvider"
import { Button, ButtonVariant } from "./Button"

export default {
  title: "shared/Button",
  component: Button,
  args: {
    children: "Button",
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}/>

// Variants
export const Contained = Template.bind({})
Contained.args = {
  variant: ButtonVariant.CONTAINED
}
export const Clear = Template.bind({})
Clear.args = {
  variant: ButtonVariant.CLEAR,
}
export const Outline = Template.bind({})
Outline.args = {
  variant: ButtonVariant.OUTLINE,
}

// Circle
export const Circle = Template.bind({})
Circle.args = {
  variant: ButtonVariant.CONTAINED,
  circle: true,
  children: ">"
}

// Theme color in dark
export const OutlineDark = Template.bind({})
OutlineDark.args = {
  variant: ButtonVariant.OUTLINE,
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const ContainedDark = Template.bind({})
ContainedDark.args = {
  variant: ButtonVariant.CONTAINED,
}
ContainedDark.decorators = [ThemeDecorator(Theme.DARK)]

export const CircleDark = Template.bind({})
CircleDark.args = {
  variant: ButtonVariant.CONTAINED,
  circle: true,
  children: ">"
}
CircleDark.decorators = [ThemeDecorator(Theme.DARK)]


