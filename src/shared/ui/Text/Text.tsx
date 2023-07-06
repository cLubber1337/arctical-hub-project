import styles from "./Text.module.scss"
import { classNames } from "shared/lib/classNames/classNames"
import { memo } from "react"

export enum TextTheme {
    PRIMARY = "primary",
    ERROR = "error"
}

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
}

export const Text = memo(({ className, title, text, theme = TextTheme.PRIMARY }: TextProps) => {

  const mods: Record<string, boolean> = {
    [styles[theme]]: true,
  }

  return (
    <div className={classNames(styles.Text, mods, [className])}>
      {title && <p className={styles.title}>{title} </p>}
      {text && <p className={styles.text}>{text} </p>}
    </div>
  )
})


