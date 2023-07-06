import { useTranslation } from "react-i18next"
import { DynamicModuleLoader, ReducerList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { profileReducer } from "app/entities/Profile"

interface ProfilePageProps {
    className?: string
}

const initialReducers: ReducerList = {
  profile: profileReducer,
}


const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation()

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
      <div>
        {t("Страница профиля")}
      </div>
    </DynamicModuleLoader>
  )
}
export default ProfilePage

