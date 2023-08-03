import { Counter } from 'app/entities/counter'
import { ComponentRender } from 'shared/lib/test/ComponentRender/ComponentRender'
import { screen } from '@testing-library/react'
import { userEvent } from '@storybook/testing-library'

describe('Counter', () => {
  test('with only first param', () => {
    ComponentRender(<Counter/>, {
      initialState: { counter: { value: 10 } }
    })
    expect(screen.getByTestId('value-title')).toHaveTextContent('10')
  })
  test('increment', () => {
    ComponentRender(<Counter/>, {
      initialState: { counter: { value: 10 } }
    })
    userEvent.click(screen.getByTestId('inc-btn'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('11')
  })
  test('decrement', () => {
    ComponentRender(<Counter/>, {
      initialState: { counter: { value: 10 } }
    })
    userEvent.click(screen.getByTestId('dec-btn'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('9')
  })
})

