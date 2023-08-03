import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
  fetchProfileData,
  profileActions,
  ProfileCard,
  profileReducer,
  selectProfileError,
  selectProfileForm,
  selectProfileIsLoading,
  selectProfileReadOnly
} from 'app/entities/Profile'
import { memo, useCallback, useEffect } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { ProfilePageHeader } from 'pages/ProfilePage/ui/ProfilePageHeader'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './ProfilePage.module.scss'
import { Currency } from 'app/entities/Currency'
import { Country } from 'app/entities/Country'


interface ProfilePageProps {
    className?: string
}

const initialReducers: ReducerList = {
  profile: profileReducer,
}


const ProfilePage = memo(({ className }: ProfilePageProps) => {
  const formData = useSelector(selectProfileForm)
  const isLoading = useSelector(selectProfileIsLoading)
  const error = useSelector(selectProfileError)
  const readOnly = useSelector(selectProfileReadOnly)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  const onChangeFirstname = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ firstname: value }))
  }, [dispatch])

  const onChangeLastname = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ lastname: value }))
  }, [dispatch])
  const onChangeAge = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value) }))
  }, [dispatch])
  const onChangeCity = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ city: value }))
  }, [dispatch])
  const onChangeAvatar = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ avatar: value }))
  }, [dispatch])
  const onChangeUsername = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ username: value }))
  }, [dispatch])
  const onChangeCurrency = useCallback((value: Currency) => {
    dispatch(profileActions.updateProfile({ currency: value }))
  }, [dispatch])
  const onChangeCountry = useCallback((value: Country) => {
    dispatch(profileActions.updateProfile({ country: value }))
  }, [dispatch])


  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
      <div className={classNames(s.ProfilePage, {}, [className])}>
        <ProfilePageHeader/>
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeAvatar={onChangeAvatar}
          onChangeUsername={onChangeUsername}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
          readOnly={readOnly}
        />
      </div>
    </DynamicModuleLoader>
  )
})
export default ProfilePage

