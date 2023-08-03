import { Select } from 'shared/ui/Select'
import { Currency } from 'app/entities/Currency'
import { memo, useCallback } from 'react'


const options = [
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.BYN, content: Currency.BYN },
]

interface Props {
    readOnly?: boolean
    value?: Currency
    onChange?: (value: Currency) => void
    fullWidth?: boolean
}

export const CurrencySelect = memo(({ readOnly, value, onChange, fullWidth }: Props) => {

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency)
  }, [onChange])

  return <Select
    value={value}
    disabled={readOnly}
    onChange={onChangeHandler}
    options={options}
    fullWidth={fullWidth}
  />
})
