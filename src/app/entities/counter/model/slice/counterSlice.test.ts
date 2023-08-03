import { counterReducer, CounterSchema } from 'app/entities/counter'
import { counterActions } from 'app/entities/counter/model/slice/counterSlice'

describe('counterSlice.test.ts', () => {

  test('counterActions.increment', () => {
    const state: CounterSchema = {
      value: 10
    }
    expect(counterReducer(state as CounterSchema, counterActions.increment()))
      .toEqual({ value: 11 })
  })
  test('counterActions.decrement', () => {
    const state: CounterSchema = {
      value: 10
    }
    expect(counterReducer(state as CounterSchema, counterActions.decrement()))
      .toEqual({ value: 9 })
  })
  test('undefined state', () => {
    expect(counterReducer(undefined, counterActions.increment()))
      .toEqual({ value: 1 })
  })
})
