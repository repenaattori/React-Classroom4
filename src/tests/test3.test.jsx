import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import '@testing-library/jest-dom';
import { Welcome } from "../App";
import userEvent from '@testing-library/user-event'


test('Test conditional rendering', async () => {
    render(<Welcome/>);
    
    let x = Math.random().toFixed(4).toString();
    await userEvent.type(screen.getByRole('textbox'), x);
    
    let elem = screen.queryByText(`Welcome ${x}!`);
    expect(elem).toBeNull();

    await userEvent.click(screen.getByRole('button'));

    await screen.findByText(`Welcome ${x}!`);
    await screen.findByRole("heading");
})

test('Test input state', async () => {
    render(<Welcome/>);

    for (let i = 0; i < 5; i++) {
        let x = Math.random().toFixed(4).toString();

        screen.getByRole('textbox').value='';

        await userEvent.type(screen.getByRole('textbox'), x);

        await userEvent.click(screen.getByRole('button'));

        await screen.findByText(`Welcome ${x}!`);
        await screen.findByRole("heading");
    }
})

