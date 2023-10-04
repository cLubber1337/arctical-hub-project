import styles from './NotFoundPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Button } from 'shared/ui/Button/Button'

interface NotFoundPageProps {
    className?: string
}


export const NotFoundPage = ({ className }: NotFoundPageProps) => {

  const { t } = useTranslation()

  return (
    <div className={classNames(styles.NotFoundPage, {}, [className])}>
      <p className={styles.text}> {t('Страница не найдена')}</p>
      <Link className={styles.link} to={RoutePath.main}>
        <Button>{t('На главную')}</Button>
      </Link>
    </div>
  )
}


