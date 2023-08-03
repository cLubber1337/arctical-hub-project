import styles from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import React, { memo, useState } from 'react'
import { Button, ButtonSize, ButtonVariant } from 'shared/ui/Button/Button'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { SidebarItemsList } from 'widgest/Sidebar/model/items'
import { SidebarItem } from 'widgest/Sidebar/ui/SidebarItem/SidebarItem'


interface SidebarProps {
    className?: string
}


export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)


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
        {collapsed ? '>' : '<'}
      </Button>

      <div className={styles.navigation}>
        {SidebarItemsList.map((item) => (
          <SidebarItem
            item={item}
            key={item.path}
            collapsed={collapsed}
          />
        ))}

      </div>
      <div className={styles.switchers}>
        <LangSwitcher shortName={collapsed}/>
        <ThemeSwitcher/>
      </div>
    </div>
  )
})
