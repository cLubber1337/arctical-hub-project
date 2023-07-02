import styles from "./LoginForm.module.scss"
import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { Input } from "shared/ui/Input/Input"
import { memo, useCallback } from "react"
import { loginActions } from "features/AuthByUsername/model/slice/loginSlice"
import { selectLoginState } from "../../model/selectors/selectLoginState/selectLoginState"
import { loginByUsername } from "features/AuthByUsername/model/services/loginByUsername/loginByUsername"
import { useAppDispatch } from "app/providers/StoreProvider/config/store"
import { useSelector } from "react-redux"
import { Text, TextTheme } from "shared/ui/Text/Text"

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const { username, password, error, isLoading } = useSelector(selectLoginState)

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
    <div className={classNames(styles.LoginForm, {}, [className])}>
      <Text title={t("Авторизация")} />
      {error && <Text text={error} theme={TextTheme.ERROR} />}
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
  )
})


