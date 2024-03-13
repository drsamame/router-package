import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, cleanup } from '@testing-library/react'
import { Router } from './Router.jsx'

describe('Router', () => {

  it('should render without problems', () => {
    render(<Router routes={[]} />)
    expect(true).toBeTruthy()
  })
})
