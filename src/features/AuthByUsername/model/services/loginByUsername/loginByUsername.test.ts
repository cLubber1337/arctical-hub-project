import axios from "axios"
import { loginByUsername } from "features/AuthByUsername/model/services/loginByUsername/loginByUsername"
import { userActions } from "app/entities/User/model/slice/userSlice"
import { TestAsyncThunk } from "shared/lib/test/TestAsyncThunk/testAsyncThunk"

jest.mock("axios")

const mockedAxios = jest.mocked(axios, true)

describe("loginByUsername.test", () => {
  // let dispatch: Dispatch
  // let getState: () => StateSchema
  //O
  // beforeEach(() => {
  //   dispatch = jest.fn()
  //   getState = jest.fn()
  // })
  // test("success login",  async () => {
  //   const authData = { username: "admin", id: "1" }
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ data: authData }))
  //   const action = loginByUsername({ username: "admin", password: "123" })
  //   const result = await action(dispatch, getState, undefined)
  //   expect(dispatch).toHaveBeenCalledWith(userActions.setUserData({ authData }))
  //   expect(dispatch).toHaveBeenCalledTimes(3)
  //   expect(mockedAxios.post).toHaveBeenCalled()
  //   expect(result.meta.requestStatus).toBe("fulfilled")
  //   expect(result.payload).toEqual(authData)
  // })
  //
  // test("error login",  async () => {
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
  //   const action = loginByUsername({ username: "admin", password: "123" })
  //   const result = await action(dispatch, getState, undefined)
  //   expect(dispatch).toHaveBeenCalledTimes(2)
  //   expect(mockedAxios.post).toHaveBeenCalled()
  //   expect(result.meta.requestStatus).toBe("rejected")
  //   expect(result.payload).toBe("Неверный логин или пароль")
  // })

  test("success login",  async () => {
    const authData = { username: "admin", id: "1" }
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: authData }))
    const thunk = new TestAsyncThunk(loginByUsername)
    const result = await thunk.callThunk({ username: "admin", password: "123" })
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setUserData({ authData }))
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe("fulfilled")
    expect(result.payload).toEqual(authData)
  })

  test("error login",  async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const thunk = new TestAsyncThunk(loginByUsername)
    const result = await thunk.callThunk({ username: "admin", password: "123" })
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe("rejected")
    expect(result.payload).toBe("Неверный логин или пароль")
  })
})
