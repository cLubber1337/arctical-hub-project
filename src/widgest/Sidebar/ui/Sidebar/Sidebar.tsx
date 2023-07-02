import styles from "./Sidebar.module.scss"
import { classNames } from "shared/lib/classNames/classNames"
import React, { useState } from "react"
import { Button, ButtonSize, ButtonVariant } from "shared/ui/Button/Button"
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher"
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher"
import { useTranslation } from "react-i18next"
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import HomeIcon from "shared/assets/icons/home.svg"
import InfoIcon from "shared/assets/icons/info.svg"


interface SidebarProps {
    className?: string
}


export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const { t } = useTranslation()


  const onToggle = () => {
    setCollapsed(prevState => !prevState)
  }

  return (
    <div data-testid="sidebar"
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}>
      <Button
        className={styles.collapse_btn}
        data-testid="sidebar-toggle"
        onClick={onToggle}
        variant={ButtonVariant.CONTAINED}
        size={ButtonSize.L}
        circle
      >
        {collapsed ? ">" : "<"}
      </Button>

      <div className={styles.navigation}>
        <AppLink
          theme={AppLinkTheme.PRIMARY}
          to={RoutePath.main}
          className={styles.navigation__item}
        >
          <HomeIcon className={styles.navigation__item__icon} />
          <span className={styles.navigation__item__link}>
            {t("Главная")}
          </span>
        </AppLink>

        <AppLink
          theme={AppLinkTheme.PRIMARY}
          to={RoutePath.about}
          className={styles.navigation__item}
        >
          <InfoIcon className={styles.navigation__item__icon}/>
          <span className={styles.navigation__item__link}>
            {t("O сайте")}
          </span>
        </AppLink>

      </div>



      <div className={styles.switchers}>
        <LangSwitcher shortName={collapsed}/>
        <ThemeSwitcher/>
      </div>

    </div>
  )
}
