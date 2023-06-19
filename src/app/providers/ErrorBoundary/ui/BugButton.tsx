import { Button } from "shared/ui/Button/Button"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"



// Был создан для тестирования

export const BugButton = () => {
  const [error, setError] = useState(false)
  const { t } = useTranslation()

  const throwError = () => {
    setError(true)
  }

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  return (
    <Button onClick={throwError} className="testBtn">
      {t("Выкинуть ошибку")}
    </Button>
  )
}


