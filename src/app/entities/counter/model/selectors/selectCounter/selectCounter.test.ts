import { selectCounter } from "app/entities/counter/model/selectors/selectCounter/selectCounter"
import { StateSchema } from "app/providers/StoreProvider"
import { DeepPartial } from "@reduxjs/toolkit"

describe("selectCounter", () => {
  test("should return counter value", () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 10
      }
    }
    expect(selectCounter(state as StateSchema)).toEqual({ value: 10 })
  })
})
