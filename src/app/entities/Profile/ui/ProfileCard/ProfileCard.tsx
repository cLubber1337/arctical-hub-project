import s from './ProfileCard.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input/Input'
import { ProfileType } from 'app/entities/Profile'
import { Loader } from 'shared/ui/Loader/Loader'
import { Avatar } from 'shared/ui/Avatar'
import { Currency, CurrencySelect } from 'app/entities/Currency'
import { Country, CountrySelect } from 'app/entities/Country'


interface ProfileCardProps {
    className?: string
    data?: ProfileType
    isLoading?: boolean
    error?: string
    onChangeFirstname?: (value: string) => void
    onChangeLastname?: (value: string) => void
    onChangeAge?: (value: string) => void
    onChangeCity?: (value: string) => void
    onChangeAvatar?: (value: string) => void
    onChangeUsername?: (value: string) => void
    onChangeCurrency?: (currency: Currency) => void
    onChangeCountry?: (country: Country) => void
    readOnly?: boolean
}


export const ProfileCard = ({
  className,
  data,
  isLoading,
  error,
  onChangeFirstname,
  onChangeLastname,
  onChangeAge,
  onChangeCity,
  onChangeUsername,
  onChangeAvatar,
  onChangeCurrency,
  onChangeCountry,
  readOnly
}: ProfileCardProps) => {
  const { t } = useTranslation('profile')


  if (isLoading) {
    return (
      <div className={classNames(s.ProfileCard, {}, [className, s.loading])}>
        <Loader/>
      </div>
    )
  }

  if (error) {
    return (
      <div className={classNames(s.ProfileCard, {}, [className, s.error])}>
        <Text theme={TextTheme.ERROR}
          title={t('Произошла ошибка при загрузке профиля')}
          text={t('Попробуйте позже')}
          align={'center'}
        />
      </div>
    )
  }

  return (
    <div className={classNames(s.ProfileCard, {}, [className])}>

      <div className={s.data}>
        <div className={s.avatar}>
          <Avatar className={s.img} size={200} src={data?.avatar} alt="Avatar"/>
        </div>
        <div className={s.row}>
          <p>{t('Имя пользователя')}</p>
          <Input
            className={!readOnly ? s.editMode : ''}
            disabled={readOnly}
            value={data?.username}
            onChange={onChangeUsername}
            fullwidth
          />
        </div>
        <div className={s.row}>
          <p>{t('Имя')}</p>
          <Input
            value={data?.firstname}
            className={!readOnly ? s.editMode : ''}
            onChange={onChangeFirstname}
            disabled={readOnly}
            fullwidth
          />
        </div>

        <div className={s.row}>
          <p>{t('Фамилия')}</p>
          <Input
            value={data?.lastname}
            className={!readOnly ? s.editMode : ''}
            onChange={onChangeLastname}
            disabled={readOnly}
            fullwidth
          />
        </div>

        <div className={s.row}>
          <p>{t('Возраст')}</p>
          <Input
            className={!readOnly ? s.editMode : ''}
            disabled={readOnly}
            value={String(data?.age)}
            onChange={onChangeAge}
            type="number"
            fullwidth
          />
        </div>
        <div className={s.row}>
          <p>{t('Страна')}</p>
          <CountrySelect
            value={data?.country}
            onChange={onChangeCountry}
            readOnly={readOnly}
            fullWidth
          />
        </div>
        <div className={s.row}>
          <p>{t('Город')}</p>
          <Input
            className={!readOnly ? s.editMode : ''}
            disabled={readOnly}
            value={data?.city}
            onChange={onChangeCity}
            fullwidth
          />
        </div>
        <div className={s.row}>
          <p>{t('Изменить аватар')}</p>
          <Input
            className={!readOnly ? s.editMode : ''}
            disabled={readOnly}
            value={data?.avatar}
            onChange={onChangeAvatar}
            fullwidth
          />
        </div>
        <div className={s.row}>
          <p>{t('Валюта')}</p>
          <CurrencySelect
            value={data?.currency}
            readOnly={readOnly}
            onChange={onChangeCurrency}
            fullWidth
          />
        </div>
      </div>
    </div>
  )
}


