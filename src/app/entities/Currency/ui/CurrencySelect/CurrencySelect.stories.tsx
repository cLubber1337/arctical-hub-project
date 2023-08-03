import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CurrencySelect } from 'app/entities/Currency'


export default {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,
  args: {},
} as ComponentMeta<typeof CurrencySelect>

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args}/>

// Variants
export const Default = Template.bind({})
Default.args = {}







