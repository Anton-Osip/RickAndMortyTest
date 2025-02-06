import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useEffect, useState } from 'react'
import clsx from 'clsx'

import s from './textField.module.scss'

export type TextFieldProps = {
  onValueChange?: (value: string) => void
  value?: string
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    { className, onChange, onValueChange, placeholder = '', value = '', ...rest }: TextFieldProps,
    ref
  ) => {
    const [editValue, setEditValue] = useState(value)

    const finalInputClassName = clsx(s.input, className)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value

      setEditValue(newValue)
      onChange?.(e)
      onValueChange?.(newValue)
    }

    useEffect(() => {
      setEditValue(value)
    }, [value])

    return (
      <input
        className={finalInputClassName}
        onChange={handleChange}
        placeholder={placeholder}
        ref={ref}
        type={'text'}
        value={editValue}
        {...rest}
      />
    )
  }
)
