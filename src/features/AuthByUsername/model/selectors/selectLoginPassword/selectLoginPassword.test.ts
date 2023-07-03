import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/StoreProvider"
import { selectLoginPassword } from "./selectLoginPassword"

describe("selectLoginPassword.test", () => {
  test("should return current password", () => {

    const state: DeepPartial<StateSchema> = {
      login: {
        password: "123"
      }
    }
    expect(selectLoginPassword(state as StateSchema)).toEqual("123")
  })
  test("should return '' with empty state", () => {
    const state: DeepPartial<StateSchema> = {}
    expect(selectLoginPassword(state as StateSchema)).toEqual("")})
})
