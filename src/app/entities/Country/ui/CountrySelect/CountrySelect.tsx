import { useCallback } from 'react'
import { Select } from 'shared/ui/Select'
import { Country } from 'app/entities/Country'


const options = [
  { value: Country.USA, content: Country.USA },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Ukraine, content: Country.Ukraine },
]

interface Props {
    readOnly?: boolean
    value?: Country
    onChange?: (value: Country) => void
    fullWidth?: boolean
}

export const CountrySelect = ({ readOnly, value, onChange, fullWidth }: Props) => {

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country)
  }, [onChange])

  return <Select
    value={value}
    disabled={readOnly}
    onChange={onChangeHandler}
    options={options}
    fullWidth={fullWidth}
  />
}
