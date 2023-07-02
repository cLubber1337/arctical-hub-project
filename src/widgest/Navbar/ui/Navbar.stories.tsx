import { Meta, StoryObj } from "@storybook/react"
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "app/providers/ThemeProvider"
import { Navbar } from "./Navbar"
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator"


const meta: Meta<typeof Navbar> = {
  title: "widget/Navbar",
  component: Navbar,
  args: {
  }
}
export default meta

type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
  args: {},
  decorators:[ThemeDecorator(Theme.LIGHT), StoreDecorator({})]
}
export const Dark: Story = {
  args: {},
  decorators:[ThemeDecorator(Theme.DARK), StoreDecorator({})]
}
export const AuthNavbar: Story = {
  args: {},
  decorators:[ThemeDecorator(Theme.DARK),
    StoreDecorator({ user: { authData:{ username: "admin", id: "1" } } })]
}



