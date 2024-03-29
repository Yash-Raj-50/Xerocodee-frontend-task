import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../src/app/page'
 
describe('Page', () => {
    it('Main page gets rendered', () => {
        render(<Page />)
        expect(screen.getByRole('main')).toBeInTheDocument()
    })
})