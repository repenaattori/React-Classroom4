import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import '@testing-library/jest-dom';
import { FillList } from "../App";
import userEvent from "@testing-library/user-event";


test('Test number list', async ()=>{
    render(<FillList/>);

    expect(screen.queryAllByRole('listitem').length).toBe(0);

    await userEvent.click(screen.getByRole('button'));
    await userEvent.click(screen.getByRole('button'));
    await userEvent.click(screen.getByRole('button'));

    let items = await screen.findAllByRole('listitem')

    expect(items.length).toBe(3);
    expect(items[0].textContent).toBe('0');
    expect(items[2].textContent).toBe('2');

    await userEvent.click(screen.getByRole('button'));
    await userEvent.click(screen.getByRole('button'));

    items = await screen.findAllByRole('listitem')
    expect(items.length).toBe(5);
    expect(items[3].textContent).toBe('3');
    expect(items[4].textContent).toBe('4');

});


