import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('render App', () => {
  test('should App Main Component', () => {
    render(<App />)
  })
})
