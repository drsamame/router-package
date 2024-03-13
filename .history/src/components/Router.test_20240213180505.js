import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { Router } from './components/Router.jsx'
import { getCurrentPath } from './utils/getCurrentPath.js'

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
