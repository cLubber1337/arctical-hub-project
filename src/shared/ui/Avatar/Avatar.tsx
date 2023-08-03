import { classNames } from 'shared/lib/classNames/classNames'
import s from './Avatar.module.scss'
import { CSSProperties, useMemo } from 'react'
import AvatarImg from './avatar.png'

interface AvatarProps {
    className?: string
    alt?: string
    src?: string
    size?: number
}

export const Avatar = ({
  className,
  src,
  alt,
  size
}: AvatarProps) => {
  const styles = useMemo<CSSProperties>(() => ({
    width: size || 100,
    height: size || 100,
    objectFit: 'cover'
  }), [size])
  return <img style={styles} className={classNames(s.avatar, {}, [className])}
    src={src || AvatarImg}
    alt={alt}/>
}
