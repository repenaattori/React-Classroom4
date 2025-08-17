import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import '@testing-library/jest-dom';
import { ToggleLayout } from "../App";
import userEvent from "@testing-library/user-event";


test('Test form toggle', async ()=>{
    render(<ToggleLayout/>);

    expect(screen.queryByTestId('fname')).toBeNull()
    expect(screen.queryByTestId('lname')).toBeNull()

    await userEvent.click(screen.getByRole('checkbox'));

    await screen.findByTestId('fname');
    await screen.findByTestId('fname');
});


