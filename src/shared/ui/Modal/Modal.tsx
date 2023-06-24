import styles from "./Modal.module.scss"
import { classNames } from "shared/lib/classNames/classNames"
import React, { ReactNode, useCallback, useEffect, useRef, useState } from "react"

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
}

export const Modal = ({ className, children, isOpen, onClose }: ModalProps) => {
  const [isClosed, setIsClosed] = useState(false)
  const timerRef = useRef<NodeJS.Timeout>()

  const mods = {
    [styles.opened]: isOpen,
    [styles.isClosed]: isClosed,
  }
  const stopPropagationHandler = (e: React.MouseEvent) => {
    e.stopPropagation()
  }
  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosed(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosed(false)
      }, 300)
    }
  }, [onClose])

  const keyHandler = useCallback((e: KeyboardEvent) => {
    if (e.code === "Escape") {
      closeHandler()
    }
  }, [closeHandler])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", keyHandler)
    }

    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener("keydown", keyHandler)
    }
  }, [isOpen, keyHandler])


  return (

    <div className={classNames(styles.Modal, mods, [className])}>
      <div className={styles.overlay} onClick={closeHandler}>
        <div className={styles.content} onClick={stopPropagationHandler}>
          {children}
        </div>
      </div>
    </div>

  )
}


