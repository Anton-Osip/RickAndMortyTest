import { clsx } from 'clsx'
import s from './card.module.scss'
import { ComponentPropsWithoutRef } from 'react'
import { Typography } from '@/components'

type Props = {
  type: 'heading' | 'normal'
  title: string
  status: 'Alive' | 'Dead' | 'unknown'
  created: string
  className?: string
} & ComponentPropsWithoutRef<'div'>

export const Card = ({ type, title, status, created, className }: Props) => {
  const classNames = clsx(s.card, s[type], className)
  const colors = { Alive: '#267504', Dead: '#820a0a', unknown: '#656ec2' }

  return (
    <div className={classNames}>
      {type === 'heading' ? (
        <Typography.Title1>{title}</Typography.Title1>
      ) : (
        <Typography.Title2>{title}</Typography.Title2>
      )}
      <div className={s.info}>
        <div className={s.status}>
          <Typography.Text2>Status:&nbsp;</Typography.Text2>
          <Typography.BoldText color={colors[status]}>{status}</Typography.BoldText>
        </div>
        {type === 'heading' && <Typography.Text2>Created:&nbsp;{created}</Typography.Text2>}
      </div>
    </div>
  )
}
