import type { Meta, StoryObj } from "@storybook/react"
import { Button, ThemeButton } from "./Button"
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "app/providers/ThemeProvider"


const meta: Meta<typeof Button> = {
  title: "shared/Button",
  component: Button,
  args: {
    children: "Button",
  }
}
export default meta

type Story = StoryObj<typeof Button>;

export const Clear: Story = {
  args: {
    theme: ThemeButton.CLEAR,
  },
}

export const OutlineDark: Story = {
  args: {
    theme: ThemeButton.OUTLINE
  },
  decorators:[ThemeDecorator(Theme.DARK)]
}


export const OutlineLight: Story = {
  args: {
    theme: ThemeButton.OUTLINE
  },
}


