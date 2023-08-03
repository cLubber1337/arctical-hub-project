import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import LoginForm from 'features/AuthByUsername/ui/LoginForm/LoginForm'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  args: {
    placeholder: 'Войти',
    value: 'user@mail.com'
  },
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args}/>


export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [StoreDecorator({
  login: { username: 'user@mail.com', password: 'password' }
})]

// Error
export const WithError = Template.bind({})
WithError.args = {
}
WithError.decorators = [StoreDecorator({
  login: { username: 'user@mail.com', password: 'password', error: 'error' }
})]

// Loading
export const Loading = Template.bind({})
Loading.args = {
}
Loading.decorators = [StoreDecorator({
  login: { username: 'user@mail.com', password: 'password', isLoading: true }
})]
//Dark Theme
export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
}
PrimaryDark.decorators = [StoreDecorator({
  login: { username: 'user@mail.com', password: 'password' }
}), ThemeDecorator(Theme.DARK)]

