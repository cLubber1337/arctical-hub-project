import styles from "./Button.module.scss"
import { classNames } from "shared/lib/classNames/classNames"
import { ButtonHTMLAttributes, FC } from "react"

export enum ButtonVariant {
    CLEAR = "clear",
    OUTLINE = "outline",
    CONTAINED = "contained",
}

export enum ButtonSize {
    M = "size_m",
    L = "size_l",
    XL = "size_xl",
}


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    variant?: ButtonVariant
    circle?: boolean
    size?: ButtonSize
    disabled?: boolean
}

export const Button: FC<ButtonProps> =
    ({ className, children, variant = ButtonVariant.CONTAINED,
      circle, size = ButtonSize.M, disabled = false, ...otherProps }) => {

      const mods: Record<string, boolean> = {
        [styles.circle]: circle,
        [styles.disabled]: disabled,
      }

      return (
        <button disabled={disabled} className={classNames(styles.Button,
          mods, [className, styles[variant], styles[size]])}
        {...otherProps}
        >
          {children}
        </button>
      )
    }
