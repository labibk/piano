import { render, screen, fireEvent} from "@testing-library/react"
import '@testing-library/jest-dom'
import App from "./App"






describe('Tests the app component', () => {

    test('to check if message in StartButton component updates correctly', () => {
        render(<App />)
        const startButtonElement = screen.getByText(/Click anywhere in screen to start/i)
        fireEvent.click(startButtonElement)
        expect(startButtonElement).toHaveTextContent("Enjoy!")
    })

    test('to check if clicking the ChordButton updates the Cards component correctly', () => {
        render(<App />)
        const chordButtonElement = screen.getByText(/Press to change the Chord Progression/i)
        const chordInformationElement = screen.getByText(/A Minor - D minor - E Minor/i)
        fireEvent.click(chordButtonElement)
        expect(chordInformationElement).toHaveTextContent("A Minor - B Diminished - C Major")

    })

})