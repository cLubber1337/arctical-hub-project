import axios from "axios"
import { loginByUsername } from "features/AuthByUsername/model/services/loginByUsername/loginByUsername"
import { userActions } from "app/entities/User/model/slice/userSlice"
import { TestAsyncThunk } from "shared/lib/test/TestAsyncThunk/testAsyncThunk"

jest.mock("axios")

describe("loginByUsername.test", () => {

  test("success login",  async () => {
    const authData = { username: "admin", id: "1" }
    const thunk = new TestAsyncThunk(loginByUsername)
    thunk.api.post.mockReturnValue(Promise.resolve({ data: authData }))
    const result = await thunk.callThunk({ username: "admin", password: "123" })
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setUserData({ authData }))
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(thunk.api.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe("fulfilled")
    expect(result.payload).toEqual(authData)
  })

  test("error login",  async () => {
    const thunk = new TestAsyncThunk(loginByUsername)
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk({ username: "admin", password: "123" })
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(thunk.api.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe("rejected")
    expect(result.payload).toBe("Неверный логин или пароль")
  })
})
