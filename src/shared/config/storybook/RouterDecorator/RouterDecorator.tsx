import "app/styles/index.scss"
import { DecoratorFn } from "@storybook/react"
import { BrowserRouter } from "react-router-dom"


export  const RouterDecorator: DecoratorFn = (Story) => (
  <BrowserRouter>
    <Story/>
  </BrowserRouter>
)
