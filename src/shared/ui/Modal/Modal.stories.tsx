import { Meta, StoryObj } from "@storybook/react"
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "app/providers/ThemeProvider"
import { Modal } from "shared/ui/Modal/Modal"


const meta: Meta<typeof Modal> = {
  title: "shared/Modal",
  component: Modal,
  args: {
    children: "Hello world Hello world  Hello world" +
        "Hello world asd " +
        "Hello worldasdadas  Hello worldasd Hello world asdasd   aaa",
  }
}
export default meta

type Story = StoryObj<typeof Modal>;

export const Normal: Story = {
  args: {
    isOpen: true
  },
}
export const Dark: Story = {
  args: {
    isOpen: true
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}



