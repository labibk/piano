import { render, screen, fireEvent} from "@testing-library/react"
import '@testing-library/jest-dom'
import Cards from "../Cards"

describe('Tests for the Cards component', () => {
    test('to check if the component renders the Chord information heading correctly',() => {
        render(<Cards chord="A Minor - D minor - E Minor"/>)
        const chordInformationElement = screen.getByText(/Chord Information/i)
        expect(chordInformationElement).toBeInTheDocument()

    })

    test('to check if the component renders the correct chord names according to the correspinding chord props',() => {
        render(<Cards chord="A Minor - D minor - E Minor"/>)
        const chordInformationElement = screen.getByText(/A Minor - D minor - E Minor/i)
        expect(chordInformationElement).toBeInTheDocument()

    })

    test('to check if the component renders the correct chord details according to the correspinding chord props',() => {
        render(<Cards chord="A Minor - D minor - E Minor"/>)
        const chordInformationElement = screen.getByText(/This is a I-IV-V-I Chord progression, sad mood/i)
        expect(chordInformationElement).toBeInTheDocument()

    })
})