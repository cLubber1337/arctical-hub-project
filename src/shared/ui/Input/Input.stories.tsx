import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Input } from 'shared/ui/Input/Input'

export default {
  title: 'shared/Input',
  component: Input,
  args: {},
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args}/>


export const Primary = Template.bind({})
Primary.args = {
  placeholder: 'Войти',
  value: 'user@mail.com'
}

