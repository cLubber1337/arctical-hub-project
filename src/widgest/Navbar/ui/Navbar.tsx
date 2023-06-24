import React, { useCallback, useState } from "react"
import styles from "./Navbar.module.scss"
import { classNames } from "shared/lib/classNames/classNames"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { useTranslation } from "react-i18next"
import { Modal } from "shared/ui/Modal/Modal"


export const Navbar = () => {

  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)
  const onToggle = useCallback(() => {
    setIsAuthModal(prevState => !prevState)
  }, [])

  return (
    <div className={classNames(styles.navbar)}>
      <Button onClick={onToggle} variant={ButtonVariant.CLEAR} className={styles.links}>
        {t("Войти")}
      </Button>

      <Modal isOpen={isAuthModal} onClose={onToggle}>
        {t("Вы вошли")}
      </Modal>
    </div>
  )
}


