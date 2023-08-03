import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CountrySelect } from 'app/entities/Country'


export default {
  title: 'entities/CountrySelect',
  component: CountrySelect,
  args: {},
} as ComponentMeta<typeof CountrySelect>

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args}/>

// Variants
export const Default = Template.bind({})
Default.args = {}







