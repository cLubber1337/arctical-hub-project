import { StateSchema } from "app/providers/StoreProvider"
import { AsyncThunkAction } from "@reduxjs/toolkit"

type ActionCreatorType<ReturnType, Arg, RejectedValue>
    = (arg: Arg) => AsyncThunkAction<ReturnType, Arg, { rejectValue: RejectedValue }>

export class TestAsyncThunk <ReturnType, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>
  getState: () => StateSchema
  actionCreator: ActionCreatorType<ReturnType, Arg, RejectedValue>

  constructor(actionCreator: ActionCreatorType<ReturnType, Arg, RejectedValue>) {
    this.actionCreator = actionCreator
    this.dispatch = jest.fn()
    this.getState = jest.fn()

  }
  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg)
    const result = await action(this.dispatch, this.getState, undefined)
    return result
  }
}
