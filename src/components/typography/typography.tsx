import {
  CSSProperties,
  ComponentProps,
  ElementType,
  FC,
  JSXElementConstructor,
  ReactNode,
} from 'react'

import { clsx } from 'clsx'
import { JSX } from 'react/jsx-runtime'
import s from './typography.module.scss'
import IntrinsicElements = JSX.IntrinsicElements

export type PropsOf<TTag extends ReactTag> = TTag extends ElementType
  ? Omit<ComponentProps<TTag>, 'ref'>
  : never
export type ReactTag = JSXElementConstructor<any> | keyof IntrinsicElements

export type TypographyProps<Ttag extends ReactTag> = {
  children: ReactNode
  className?: string
  color?: CSSProperties['color']
  component?: Ttag
  mb?: CSSProperties['marginBottom']
  ml?: CSSProperties['marginLeft']
  mr?: CSSProperties['marginRight']
  mt?: CSSProperties['marginTop']
  mx?: CSSProperties['marginRight']
  my?: CSSProperties['marginLeft']
} & PropsOf<Ttag>

const createTypographyComponent = <T extends ReactTag>(
  basicClassName: Component
): FC<TypographyProps<T>> => {
  return ({ children, className, color, component, mb, ml, mr, mt, mx, my, style, ...rest }) => {
    const Component = component || COMPONENTS[basicClassName] || 'span'

    const classNames = clsx(s[basicClassName], className)

    const styles = {
      ...(mx && { marginLeft: mx, marginRight: mx }),
      ...(my && { marginBottom: my, marginTop: my }),
      ...(mr && { marginRight: mr }),
      ...(ml && { marginLeft: ml }),
      ...(mt && { marginTop: mt }),
      ...(mb && { marginBottom: mb }),
      ...(color && { color }),
      ...style,
    }

    return (
      <Component className={classNames} style={styles} {...rest}>
        {children}
      </Component>
    )
  }
}

export const Typography = {
  Text1: createTypographyComponent('Text1'),
  Text2: createTypographyComponent('Text2'),
  BoldText: createTypographyComponent('BoldText'),
  Title1: createTypographyComponent('Title1'),
  Title2: createTypographyComponent('Title2'),
}

const COMPONENTS = {
  Text1: 'p',
  Text2: 'p',
  BoldText: 'span',
  Title1: 'h3',
  Title2: 'h4',
} as const

type Component = keyof typeof COMPONENTS
