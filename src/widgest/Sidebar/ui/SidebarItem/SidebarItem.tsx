import styles from "./SidebarItem.module.scss"
import { useTranslation } from "react-i18next"
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink"
import React, { memo } from "react"
import { SidebarItemType } from "widgest/Sidebar/model/items"
import { classNames } from "shared/lib/classNames/classNames"

interface SidebarItemProps {
    item: SidebarItemType
    collapsed?: boolean
}


export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { path, Icon, text } = item
  const { t } = useTranslation()

  return (
    <AppLink
      theme={AppLinkTheme.PRIMARY}
      to={path}
      className={classNames(styles.navigation__item, { [styles.collapsed]: collapsed })}
    >
      <Icon className={styles.navigation__item__icon}/>
      <span className={styles.navigation__item__link}>
        {t(text)}
      </span>
    </AppLink>
  )

})


