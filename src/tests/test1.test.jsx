import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import '@testing-library/jest-dom';
import {BasicButton } from "../App";
import userEvent from '@testing-library/user-event'

test('Test button text', async ()=>{
    render(<BasicButton/>);

    expect(screen.getByText('Submit')).toBeVisible();
    expect(screen.queryByText('Done')).toBeNull();

    await userEvent.click(screen.getByRole('button'));

    let e = await screen.findByText('Done');
    expect(e).toBeVisible();
    expect(screen.queryByText('Submit')).toBeNull();
    
})

