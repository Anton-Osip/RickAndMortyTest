import type { Meta, StoryObj } from '@storybook/react'
import { Card } from '@/components/card/card'

const meta = {
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const NormalCard: Story = {
  args: {
    type: 'normal',
    title: 'Stair Goblin - Mythological Creature',
    status: 'Alive',
    created: '04.11.2017',
    url: 'http://localhost',
  },
}

export const HeadingCard: Story = {
  args: {
    url: 'http://localhost',
    type: 'heading',
    title: 'Stair Goblin - Mythological Creature',
    status: 'Dead',
    created: '04.11.2017',
  },
}
