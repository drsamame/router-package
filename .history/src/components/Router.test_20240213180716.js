import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { Router } from './Router.jsx'

vi.mock('./utils/getCurrentPath.js', () => ({
  getCurrentPath: vi.fn()
}))

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
