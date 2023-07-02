import React, { useCallback, useState } from "react"
import styles from "./Navbar.module.scss"
import { classNames } from "shared/lib/classNames/classNames"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { useTranslation } from "react-i18next"
import { LoginModal } from "features/AuthByUsername"
import { useSelector } from "react-redux"
import { selectUserAuthData } from "app/entities/User"
import { useAppDispatch } from "app/providers/StoreProvider/config/store"
import { userActions } from "app/entities/User/model/slice/userSlice"


export const Navbar = () => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)
  const dispatch = useAppDispatch()
  const userAuthData = useSelector(selectUserAuthData)

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])
  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  },[dispatch])

  if (userAuthData) {
    return (
      <div className={classNames(styles.navbar)}>
        <Button
          onClick={onLogout}
          variant={ButtonVariant.CLEAR}
          className={styles.links}
        >
          {t("Выйти")}
        </Button>
      </div>
    )}

  return (
    <div className={classNames(styles.navbar)}>
      <Button
        onClick={onShowModal}
        variant={ButtonVariant.CLEAR}
        className={styles.links}
      >
        {t("Войти")}
      </Button>

      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  )
}


