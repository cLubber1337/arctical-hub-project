import { DynamicModuleLoader, ReducerList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { fetchProfileData, ProfileCard, profileReducer } from "app/entities/Profile"
import { useEffect } from "react"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"


interface ProfilePageProps {
    className?: string
}

const initialReducers: ReducerList = {
  profile: profileReducer,
}


const ProfilePage = ({ className }: ProfilePageProps) => {
  const dispatch = useAppDispatch()

  useEffect(()=> {
    dispatch( fetchProfileData())
  }, [dispatch])



  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
      <div>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  )
}
export default ProfilePage

