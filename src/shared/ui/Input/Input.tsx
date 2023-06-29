import styles from "./Input.module.scss"
import { classNames } from "shared/lib/classNames/classNames"
import React, { HTMLInputTypeAttribute, InputHTMLAttributes, memo, useEffect, useRef } from "react"


type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string
    onChange?: (value: string) => void
    type?: HTMLInputTypeAttribute
    placeholder?: string
    autoFocus?: boolean
}

export const Input = memo(({
  className, value, onChange, type = "text", placeholder, autoFocus, ...otherProps
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

  return (
    <input
      ref={ref}
      value={value}
      onChange={onChangeHandler}
      placeholder={placeholder}
      type={type}
      className={classNames(styles.Input, {}, [className])}
      {...otherProps}
    />
  )
})



