import s from './LoginForm.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import React, { memo, useCallback } from 'react'
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername'
import { useSelector } from 'react-redux'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { selectLoginUsername } from '../../model/selectors/selectLoginUsername/selectLoginUsername'
import { selectLoginPassword } from '../../model/selectors/selectLoginPassword/selectLoginPassword'
import { selectLoginError } from '../../model/selectors/selectLoginError/selectLoginError'
import { selectLoginIsLoading } from '../../model/selectors/selectLoginIsLoading/selectLoginIsLoading'
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'


export interface LoginFormProps {
    className?: string
    onSuccess: () => void
}

const initialReducers: ReducerList = {
  login: loginReducer,
}

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const username = useSelector(selectLoginUsername)
  const password = useSelector(selectLoginPassword)
  const error = useSelector(selectLoginError)
  const isLoading = useSelector(selectLoginIsLoading)
  const onChangeUsername = useCallback((username: string) => {
    dispatch(loginActions.setUserName({ username }))
  }, [dispatch])

  const onChangePassword = useCallback((password: string) => {
    dispatch(loginActions.setPassword({ password }))
  }, [dispatch])

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }))
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess()
    }
  }, [dispatch, password, username, onSuccess])

  const onEnterKeyDown = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      onLoginClick()
    }
  }, [onLoginClick])


  return (
  // eslint-disable-next-line i18next/no-literal-string
    <DynamicModuleLoader removeAfterUnmount={true} reducers={initialReducers}>
      <div
        className={classNames(s.LoginForm, {}, [className])}
        onKeyDown={onEnterKeyDown}
      >
        <Text title={t('Авторизация')} className={s.title}/>
        {error && <Text text={error} theme={TextTheme.ERROR}/>}
        <div className={s.input__block}>
          <Input
            placeholder={t('Логин')}
            className={s.input}
            type="text"
            onChange={onChangeUsername}
            autoFocus
            value={username}
          />
          <Input
            placeholder={t('Пароль')}
            className={s.input}
            type="password"
            onChange={onChangePassword}
            value={password}
          />
        </div>
        <Button
          variant={ButtonVariant.CONTAINED}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t('Войти')}
        </Button>
      </div>
    </DynamicModuleLoader>
  )
})

export default LoginForm

