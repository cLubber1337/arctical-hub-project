import { createSelector } from '@reduxjs/toolkit'
import { selectCounter } from 'app/entities/counter/model/selectors/selectCounter/selectCounter'
import { CounterSchema } from 'app/entities/counter'

export const selectCounterValue = createSelector(
  selectCounter, (counter: CounterSchema) => counter.value)
