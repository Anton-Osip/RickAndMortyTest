import type { Meta } from '@storybook/react'
import { Typography } from '@/components'

export default {
  title: 'Components/Typography',
  component: Typography.Title1,
} as Meta<typeof Typography.Title1>

export const AllTypography = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Typography.Text1>Text1</Typography.Text1>
      <Typography.Text2>Text2</Typography.Text2>
      <Typography.BoldText>BoldText</Typography.BoldText>
      <Typography.Title1>Title1</Typography.Title1>
      <Typography.Title2>Title2</Typography.Title2>
    </div>
  ),
}
