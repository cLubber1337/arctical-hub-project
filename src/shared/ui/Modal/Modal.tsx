import styles from './Modal.module.scss'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import { Portal } from 'shared/ui/Portal/Portal'

const ANIMATION_DELAY = 300

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

export const Modal = ({ className, children, isOpen, onClose, lazy }: ModalProps) => {
  const [isClosed, setIsClosed] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const timerRef = useRef<NodeJS.Timeout>()
  const { theme } = useTheme()

  const mods : Mods = {
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
      }, ANIMATION_DELAY)
    }
  }, [onClose])

  const keyHandler = useCallback((e: KeyboardEvent) => {
    if (e.code === 'Escape') {
      closeHandler()
    }
  }, [closeHandler])

  useEffect(() => {
    if(isOpen) {
      setIsMounted(true)
    }
    return () => {
      setIsMounted(false)
    }
  },[isOpen])


  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', keyHandler)
    }

    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener('keydown', keyHandler)
    }
  }, [isOpen, keyHandler])

  if (lazy && !isMounted) {
    return null
  }

  return (
    <Portal>
      <div className={classNames(styles.Modal, mods, [className, theme])}>
        <div className={styles.overlay} onClick={closeHandler}>
          <div
            className={classNames(styles.content)}
            onClick={stopPropagationHandler}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
