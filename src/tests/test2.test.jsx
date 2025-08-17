import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import '@testing-library/jest-dom';
import { ShowText } from "../App";
import userEvent from '@testing-library/user-event'

test('Test input state', async () => {
    render(<ShowText />);

    for (let i = 0; i < 5; i++) {
        let x = Math.random().toFixed(4).toString();

        screen.getByRole('textbox').value='';

        await userEvent.type(screen.getByRole('textbox'), x);

        await screen.findByText(x);
        await screen.findByRole("heading");
    }
})

