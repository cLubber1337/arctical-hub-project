import "app/styles/index.scss"
import { DecoratorFn } from "@storybook/react"
import { Theme, ThemeProvider } from "app/providers/ThemeProvider"


// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme): DecoratorFn => (Story) => (
  <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`}>
      <Story />
    </div>
  </ThemeProvider>
)
