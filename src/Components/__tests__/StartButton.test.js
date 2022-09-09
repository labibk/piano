import { render, screen, fireEvent} from "@testing-library/react"
import '@testing-library/jest-dom'
import StartButton from "../StartButton"

describe('Test the Startbutton component', () => {
    test('to check if the component renders the correct message', () => {
        render(<StartButton message="Click anywhere in screen to start"/>)
        const startButtonElement = screen.getByText(/Click anywhere in screen to start/i)
        expect(startButtonElement).toBeInTheDocument()
    })

    test('to check if the component renders the warning message correctly',() => {
        render(<StartButton />)
        const warningElement = screen.getByText(/Please play one key at a time/i)
        expect(warningElement).toBeInTheDocument()
    })
})