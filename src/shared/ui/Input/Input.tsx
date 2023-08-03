import s from './Input.module.scss'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import React, { HTMLInputTypeAttribute, InputHTMLAttributes, memo, useEffect, useRef } from 'react'


type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'>

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string
    onChange?: (value: string) => void
    type?: HTMLInputTypeAttribute
    placeholder?: string
    autoFocus?: boolean
    readonly?: boolean
    fullwidth?: boolean
}

export const Input = memo(({
  className,
  value,
  onChange,
  type = 'text',
  placeholder,
  fullwidth,
  autoFocus,
  readonly,
  ...otherProps
}: InputProps) => {
  const ref = useRef<HTMLInputElement>(null)

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  useEffect(() => {
    if (autoFocus) {
      ref.current?.focus()
    }

  }, [autoFocus])

  const mods: Mods = {
    [s.readonly]: readonly,
    [s.fullWidth]: fullwidth,
  }

  return (
    <input
      ref={ref}
      value={value}
      onChange={onChangeHandler}
      placeholder={placeholder}
      type={type}
      readOnly={readonly}
      className={classNames(s.Input, mods, [className])}
      {...otherProps}
    />
  )
})



