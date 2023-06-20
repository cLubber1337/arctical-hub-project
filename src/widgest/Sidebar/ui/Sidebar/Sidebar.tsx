import styles from "./Sidebar.module.scss"
import { classNames } from "shared/lib/classNames/classNames"
import React, { useState } from "react"
import { Button } from "shared/ui/Button/Button"
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher"
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher"


interface SidebarProps {
    className?: string
}


export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed(prevState => !prevState)
  }

  return (
    <div data-testid="sidebar"
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}>
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
      >
                Toggle
      </Button>
      <div className={styles.switchers}>
        <LangSwitcher/>
        <ThemeSwitcher/>
      </div>

    </div>
  )
}
