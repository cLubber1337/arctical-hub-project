import "app/styles/index.scss"
import { DecoratorFn } from "@storybook/react"
import { StoreProvider } from "app/providers/StoreProvider"


export const StoreDecorator: DecoratorFn = (Story) => (
  <StoreProvider>
    <Story/>
  </StoreProvider>
)
