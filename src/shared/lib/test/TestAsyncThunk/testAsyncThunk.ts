import { StateSchema } from 'app/providers/StoreProvider'
import { AsyncThunkAction } from '@reduxjs/toolkit'
import axios, { AxiosStatic } from 'axios'

type ActionCreatorType<ReturnType, Arg, RejectedValue>
    = (arg: Arg) => AsyncThunkAction<ReturnType, Arg, { rejectValue: RejectedValue }>


jest.mock('axios')
const mockedAxios = jest.mocked(axios, true)


export class TestAsyncThunk<ReturnType, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>
  getState: () => StateSchema
  actionCreator: ActionCreatorType<ReturnType, Arg, RejectedValue>


  api: jest.MockedFunctionDeep<AxiosStatic>
  navigate: jest.MockedFn<any>

  constructor(actionCreator: ActionCreatorType<ReturnType, Arg, RejectedValue>) {
    this.actionCreator = actionCreator
    this.dispatch = jest.fn()
    this.getState = jest.fn()
    this.api = mockedAxios
    this.navigate = jest.fn()

  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg)
    const result = await action(
      this.dispatch,
      this.getState,
      { api: this.api, navigate: this.navigate })
    return result
  }
}
