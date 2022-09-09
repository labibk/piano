import { render, screen, fireEvent} from "@testing-library/react"
import '@testing-library/jest-dom'
import ChordButton from "../ChordButton"

describe('Tests for the ChordButton component', () => {
    test('to check if the chord button has the right text', () => {
        render(<ChordButton/>)
        const chordButtonElement = screen.getByText(/Press to change the Chord Progression/i)
        expect(chordButtonElement).toBeInTheDocument()
    })
})