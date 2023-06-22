import "app/styles/index.scss"
import { DecoratorFn } from "@storybook/react"
import { Theme } from "app/providers/ThemeProvider"


// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme): DecoratorFn => (Story) => (
  <div className={`app ${theme}`}>
    <Story />
  </div>
)
