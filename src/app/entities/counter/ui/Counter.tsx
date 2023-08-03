import { Button, ButtonVariant } from 'shared/ui/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from 'app/entities/counter/model/slice/counterSlice'
import { selectCounterValue } from '../model/selectors/selectCounterValue/selectCounterValue'
import { useTranslation } from 'react-i18next'


export const Counter = () => {
  const value = useSelector(selectCounterValue)
  const { t } = useTranslation()

  const dispatch = useDispatch()

  const inc = () => {
    dispatch(counterActions.increment())
  }
  const dec = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <div>
      <h1 data-testid="value-title">{value}</h1>
      <Button
        data-testid="inc-btn"
        variant={ButtonVariant.OUTLINE}
        onClick={inc}
      >
        {t('Увеличить')}
      </Button>
      <Button
        data-testid="dec-btn"
        variant={ButtonVariant.OUTLINE}
        onClick={dec}
      >
        {t('Уменьшить')}
      </Button>
    </div>
  )
}


