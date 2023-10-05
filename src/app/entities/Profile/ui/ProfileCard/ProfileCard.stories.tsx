import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ProfileCard } from './ProfileCard'
import { Currency } from 'app/entities/Currency'
import { Country } from 'app/entities/Country'

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  args: {
    data: {
      firstname: 'Андрей',
      lastname: 'Сороко',
      age: 28,
      currency: Currency.EUR,
      country: Country.Germany,
      city: 'Minsk',
      username: 'clubber',
      avatar: 'https://img.freepik.com/free-photo/ai-cloud-concept-with-robot-arm_23-2149739748.' +
          'jpg?w=996&t=st=1691067128' +
          '~exp=1691067728' +
          '~hmac=2c6a00c6a433796c44f043340d74a6b374d8cefdfbf0a671e4a21ee82f27d279'
    }
  }
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args}/>

// Variants
export const Primary = Template.bind({})
Primary.args = {}

export const WithError = Template.bind({})
WithError.args = {
  error: 'some error',
}

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true,
}


