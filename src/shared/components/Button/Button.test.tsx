import { render } from '@testing-library/react'
import { Button } from '.'

describe('Render Button Element', () => {
  test('should render button element', () => {
    render(<Button>TEST</Button>)
  })
})
