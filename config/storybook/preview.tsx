import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator"
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "../../src/app/providers/ThemeProvider"
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator"

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    RouterDecorator, StyleDecorator, ThemeDecorator(Theme.LIGHT)
  ]
}



export default preview