import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import '@testing-library/jest-dom';
import { AddUsers, FillList } from "../App";
import userEvent from "@testing-library/user-event";


const testData = [
    {name: 'John', age: '20', hobby: 'running'},
    {name: 'Lisa', age: '23', hobby: 'swimming'},
    {name: 'Sarah', age: '19', hobby: 'piano'}
]

test('Test adding users', async ()=>{
    render(<AddUsers/>);

    expect(screen.queryAllByRole('listitem').length).toBe(0);
    let inputs = screen.queryAllByRole('textbox');
    expect(inputs.length).toBe(3);

    let i = 0;
    for (const user of testData) {
        inputs[0].value = '';
        await userEvent.type(inputs[0], user.name);     
        inputs[1].value = '';        
        await userEvent.type(inputs[1], user.age);
        inputs[2].value = '';
        await userEvent.type(inputs[2], user.hobby); 

        await userEvent.click(screen.getByRole('button'));
        let items = await screen.findAllByRole('listitem');
        expect(items.length).toBe(i+1);
        expect(items[i++]).toHaveTextContent(`${user.name},${user.age},${user.hobby}`);
    }
});


