import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import React from "react"
import { Button, ButtonVariant } from "shared/ui/Button/Button"

interface LangSwitcherProps {
    className?: string
    shortName?: boolean
}

export const LangSwitcher = ({ className, shortName }: LangSwitcherProps) => {

  const { t, i18n } = useTranslation()
  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
  }


  return (
    <Button className={classNames("", {}, [className])}
      onClick={toggle}
      variant={ButtonVariant.CLEAR}
    >
      {shortName ? t("Аб-ра Языка") : t("Язык")}
    </Button>
  )
}
