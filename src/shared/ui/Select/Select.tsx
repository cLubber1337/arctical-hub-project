import s from './Select.module.scss'
import { memo } from 'react'
import { Listbox } from '@headlessui/react'
import ArrowDownIcon from '../../assets/icons/arrowDown.svg'
import ArrowUpIcon from '../../assets/icons/arrowUp.svg'
import { classNames } from 'shared/lib/classNames'


export type SelectOptions = {
    value: string
    content: string
}

interface SelectProps {
    options?: SelectOptions[]
    value?: string
    fullWidth?: boolean
    disabled?: boolean
    onChange?: (string: string) => void
}

export const Select = memo(({ options, fullWidth, disabled, value, onChange }: SelectProps) => {

  const onChangeHandler = (e: string) => {
    onChange?.(e)
  }

  return (
    <div className={fullWidth ? s.fullWidth : s.select}>
      <Listbox value={value} onChange={onChangeHandler} disabled={disabled}>
        {({ open }) => (
          <>
            <Listbox.Button
              className={classNames(s.button, { [s.editMode]: !disabled })}
            >
              <span>
                {value}
              </span>
              {!disabled ? !open ? <ArrowDownIcon/> : <ArrowUpIcon/> : null}
            </Listbox.Button>

            <Listbox.Options className={s.options}>
              {options?.map((item) => (
                <Listbox.Option key={item.value} value={item.content}
                  className={s.option}>
                  {item.content}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </>
        )}
      </Listbox>
    </div>
  )
})
