
import {render, screen, cleanup, fireEvent,} from "@testing-library/react"
import '@testing-library/jest-dom'

import StartButton from "../StartButton"


describe('starbutton test', () => {
    test('checks if div renders', async () => {
        render(<StartButton message="Click anywhere in screen or this button to start"/>);
        const startButtonElement = screen.getByText(/Click anywhere in screen or this button to start/i)
        expect(startButtonElement).toBeInTheDocument();
        
        
    })
})

// message = Click anywhere in screen or this button to start
