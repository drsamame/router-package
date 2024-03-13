import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, cleanup, screen } from '@testing-library/react'
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
  it('should render 404 if no routes match', () => {
    render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />)
    expect(screen.getByText('404')).toBeTruthy()
  })
})
