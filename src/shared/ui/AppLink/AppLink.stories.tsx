import { Meta, StoryObj } from "@storybook/react"
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "app/providers/ThemeProvider"
import { AppLink, AppLinkTheme } from "./AppLink"

const meta: Meta<typeof AppLink> = {
  title: "shared/AppLink",
  component: AppLink,
  args: {
    children: "Link",
    to: "/"
  }
}
export default meta

type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY
  },
}
export const Secondary: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY
  },
}
export const PrimaryDark: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}
export const SecondaryDark: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}


