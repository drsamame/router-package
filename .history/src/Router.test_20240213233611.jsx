import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, cleanup } from '@testing-library/react'
import { Router } from './components/Router.jsx'

describe('Router', () => {
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
  })
  it('should render without problems', () => {
    render(<Router routes={[]} />)
    expect(true).toBeTruthy()
  })
})
