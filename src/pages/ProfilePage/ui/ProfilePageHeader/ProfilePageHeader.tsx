import s from './ProfilePageHeader.module.scss'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'
import { classNames } from 'shared/lib/classNames/classNames'
import { useSelector } from 'react-redux'
import { profileActions, selectProfileReadOnly, updateProfileData } from 'app/entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useCallback } from 'react'

interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile')
  const readonly = useSelector(selectProfileReadOnly)
  const dispatch = useAppDispatch()

  const handlerEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])
  const handlerCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])
  const handlerSave = useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch])

  return <div className={classNames(s.ProfilePageHeader, {}, [className])}>
    <Text title={t('Профиль')}/>
    <div className={s.actions}>
      {readonly ?
        <Button
          variant={ButtonVariant.OUTLINE}
          className={s.editBtn}
          onClick={handlerEdit}
        >
          {t('Редактировать')}
        </Button>
        :
        <Button
          variant={ButtonVariant.OUTLINE_RED}
          className={s.editBtn}
          onClick={handlerCancelEdit}
        >
          {t('Отменить')}
        </Button>}

      {!readonly &&
                <Button
                  variant={ButtonVariant.OUTLINE}
                  className={s.editBtn}
                  onClick={handlerSave}
                >
                  {t('Сохранить')}
                </Button>}
    </div>
  </div>
}


