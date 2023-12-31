import 'app/styles/index.scss'
import { Story } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { profileReducer } from 'app/entities/Profile'
import { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'


const defaultAsyncReducers: ReducerList = {
  login : loginReducer,
  profile : profileReducer
}

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducerList
) => (StoryComponent: Story) =>
  (
    <StoreProvider
      initialState={state}
      asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
      <StoryComponent/>
    </StoreProvider>
  )
