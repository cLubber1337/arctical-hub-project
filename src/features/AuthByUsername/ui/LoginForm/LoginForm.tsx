import styles from "./LoginForm.module.scss"
import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { Input } from "shared/ui/Input/Input"

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  return (
    <div className={classNames(styles.LoginForm, {}, [className])}>
      <div className={styles.input__block}>
        <Input
          placeholder={t("Логин")}
          className={styles.input}
          type="text"
          autoFocus
        />
        <Input
          placeholder={t("Пароль")}
          className={styles.input}
          type="password"

        />
      </div>
      <Button variant={ButtonVariant.CONTAINED}>
        {t("Войти")}
      </Button>
    </div>
  )
}


