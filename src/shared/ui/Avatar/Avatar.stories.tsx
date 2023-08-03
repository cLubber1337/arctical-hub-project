import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Avatar } from 'shared/ui/Avatar'
import AvatarImg from './avatar.png'


export default {
  title: 'shared/Avatar',
  component: Avatar,
  args: {},
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args}/>

// Variants
export const Default = Template.bind({})
Default.args = {
  size: 200,
  alt: 'Avatar',
  src: AvatarImg,
}

export const Small = Template.bind({})
Small.args = {
  size: 75,
  alt: 'Avatar',
  src: AvatarImg,
}





