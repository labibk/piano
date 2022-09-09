import { render, screen, fireEvent} from "@testing-library/react"
import '@testing-library/jest-dom'

import colorChanger from "../ColorChanger"

describe('Tests for the ColorChanger component', () => {
    test('to check if the input element is in the document', () => {
        render(<colorChanger placeholder="For Test"/>)
        const inputElement = screen.getByPlaceholderText("For Test")
        expect(inputElement).toBeInTheDocument()
    })
})