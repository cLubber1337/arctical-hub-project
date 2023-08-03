import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Select } from './Select'


export default {
  title: 'shared/Select',
  component: Select,
  args: {},
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args}/>

// Variants
export const Default = Template.bind({})
Default.args = {}







