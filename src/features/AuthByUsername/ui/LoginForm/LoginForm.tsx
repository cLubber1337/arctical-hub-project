import styles from "./LoginForm.module.scss"
import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { Input } from "shared/ui/Input/Input"
import { memo, useCallback } from "react"
import { loginActions, loginReducer } from "features/AuthByUsername/model/slice/loginSlice"
import { loginByUsername } from "features/AuthByUsername/model/services/loginByUsername/loginByUsername"
import { useAppDispatch } from "app/providers/StoreProvider/config/store"
import { useSelector } from "react-redux"
import { Text, TextTheme } from "shared/ui/Text/Text"
import { selectLoginUsername } from "../../model/selectors/selectLoginUsername/selectLoginUsername"
import { selectLoginPassword } from "../../model/selectors/selectLoginPassword/selectLoginPassword"
import { selectLoginError } from "../../model/selectors/selectLoginError/selectLoginError"
import { selectLoginIsLoading } from "../../model/selectors/selectLoginIsLoading/selectLoginIsLoading"
import { DynamicModuleLoader, ReducerList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"


export interface LoginFormProps {
    className?: string
}
const initialReducers: ReducerList = {
  login: loginReducer,
}

const LoginForm = memo(({ className }: LoginFormProps) => {
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

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }))
  }, [dispatch, password, username])


  return (
  // eslint-disable-next-line i18next/no-literal-string
    <DynamicModuleLoader removeAfterUnmount={true} reducers={initialReducers}>
      <div className={classNames(styles.LoginForm, {}, [className])}>
        <Text title={t("Авторизация")}/>
        {error && <Text text={error} theme={TextTheme.ERROR}/>}
        <div className={styles.input__block}>
          <Input
            placeholder={t("Логин")}
            className={styles.input}
            type="text"
            onChange={onChangeUsername}
            autoFocus
            value={username}
          />
          <Input
            placeholder={t("Пароль")}
            className={styles.input}
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
          {t("Войти")}
        </Button>
      </div>
    </DynamicModuleLoader>
  )
})

export default LoginForm

