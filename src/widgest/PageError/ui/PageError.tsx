import styles from "./PageError.module.scss"
import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import { Button } from "shared/ui/Button/Button"
import { useTheme } from "app/providers/ThemeProvider"

interface PageErrorProps {
    className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  const reloadPage = () => {
    window.location.reload()
  }

  return (
    <div className={classNames(styles.PageError, {}, [className, theme])}>
      <p>{t("Произошла непредвиденная ошибка")}</p>
      <Button onClick={reloadPage} className="testBtn">{t("Обновить страницу")}</Button>
    </div>
  )
}


