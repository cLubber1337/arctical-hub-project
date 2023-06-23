import React from "react"
import styles from "./Navbar.module.scss"
import { classNames } from "shared/lib/classNames/classNames"


interface NavbarProps {
    className?: string
}


export const Navbar = ({ className }: NavbarProps) => {

  return (
    <div className={classNames(styles.navbar)}>
      <div className={styles.links}>

      </div>
    </div>
  )
}


