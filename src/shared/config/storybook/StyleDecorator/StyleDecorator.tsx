import "app/styles/index.scss"
import { DecoratorFn } from "@storybook/react"


export  const StyleDecorator: DecoratorFn = (Story) => (
  <div className="app" > <Story/> </div>
)
