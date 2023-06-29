import React, { useCallback, useState } from "react"
import styles from "./Navbar.module.scss"
import { classNames } from "shared/lib/classNames/classNames"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { useTranslation } from "react-i18next"
import { LoginModal } from "features/AuthByUsername"


export const Navbar = () => {

  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)
  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])
  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  return (
    <div className={classNames(styles.navbar)}>
      <Button onClick={onShowModal} variant={ButtonVariant.CLEAR} className={styles.links}>
        {t("Войти")}
      </Button>

      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  )
}


