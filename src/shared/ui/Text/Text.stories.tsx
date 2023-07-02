import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Text, TextTheme } from "./Text"
import { ThemeDecorator } from "../../config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "../../../app/providers/ThemeProvider"


export default {
  title: "shared/Text",
  component: Text,
  args: {
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args}/>

export const Primary = Template.bind({})
Primary.args = {
  title: "Title",
  text: "some some Text",
}
export const Error = Template.bind({})
Error.args = {
  title: "Title",
  text: "some some Text",
  theme: TextTheme.ERROR
}

export const onlyTitle = Template.bind({})
onlyTitle.args = {
  title: "Title",
}

export const onlyText = Template.bind({})
onlyText.args = {
  text: "some some Text",
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  title: "Title",
  text: "some some Text",
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const ErrorDark = Template.bind({})
ErrorDark.args = {
  title: "Title",
  text: "some some Text",
  theme: TextTheme.ERROR
}
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)]


