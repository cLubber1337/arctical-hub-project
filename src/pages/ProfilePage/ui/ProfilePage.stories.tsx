import { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import ProfilePage from './ProfilePage'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { Currency } from 'app/entities/Currency'
import { Country } from 'app/entities/Country'


const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  args: {}
}
export default meta

type Story = StoryObj<typeof ProfilePage>;

export const Normal: Story = {
  args: {},
  decorators: [StoreDecorator({
    profile: {
      form: {
        firstname: 'Андрей',
        lastname: 'Сороко',
        age: 28,
        currency: Currency.USD,
        country: Country.Belarus,
        city: 'Minsk',
        username: 'clubber',
        avatar: 'https://img.freepik.com/free-photo/ai-cloud-concept-with-robot-arm_23-2149739748.' +
            'jpg?w=996&t=st=1691067128' +
            '~exp=1691067728' +
            '~hmac=2c6a00c6a433796c44f043340d74a6b374d8cefdfbf0a671e4a21ee82f27d279'
      }
    }
  })]
}
export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
      form: {
        firstname: 'Андрей',
        lastname: 'Сороко',
        age: 28,
        currency: Currency.USD,
        country: Country.Belarus,
        city: 'Minsk',
        username: 'clubber',
        avatar: 'https://img.freepik.com/free-photo/ai-cloud-concept-with-robot-arm_23-2149739748.' +
            'jpg?w=996&t=st=1691067128' +
            '~exp=1691067728' +
            '~hmac=2c6a00c6a433796c44f043340d74a6b374d8cefdfbf0a671e4a21ee82f27d279'
      }
    }
  })]
}



