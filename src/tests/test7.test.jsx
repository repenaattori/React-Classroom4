import { render, screen, within } from "@testing-library/react";
import { expect } from "vitest";
import '@testing-library/jest-dom';
import { ShoppingCart } from "../App";
import userEvent from "@testing-library/user-event";


const test_products = [
  { id: 0, name: 'iPhone 16', quantity: 0 },
  { id: 1, name: 'Ryzen 5 5600',  quantity: 0 },
  { id: 2, name: 'PS5',  quantity: 0 },
  { id: 3, name: 'Genelec 8010A',  quantity: 0 },
  { id: 4, name: 'Canon EOS R50',  quantity: 0 },
]

test('Test product list', async ()=>{
    render(<ShoppingCart products={test_products}/>);

    let ul = screen.getAllByRole('list')[0];
    let items = within(ul).getAllByRole('listitem');
    expect(items.length).toBe(test_products.length);

    for (let i = 0; i < items.length; i++) {
        expect(items[0].textContent).toBe(test_products[0].name)
    }

});


test('Test shoppig cart changes', async ()=>{
    render(<ShoppingCart products={test_products}/>);

    let i = 2;
    let a = 4;

    let lists = screen.getAllByRole('list');
    let items = within(lists[0]).queryAllByRole('listitem');
    let cartItems = within(lists[1]).queryAllByRole('listitem');
    expect(cartItems.length).toBe(0);

    await userEvent.click(items[i]);
    await userEvent.click(items[i]);
    await userEvent.click(items[a]);
    await userEvent.click(items[a]);
    await userEvent.click(items[a]);

    cartItems = await within(lists[1]).findAllByRole('listitem');
    expect(cartItems.length).toBe(5);

    cartItems = await within(lists[1]).findAllByText(items[i].textContent);
    expect(cartItems.length).toBe(2);

    cartItems = await within(lists[1]).findAllByText(items[a].textContent);
    expect(cartItems.length).toBe(3);
});


test('Test shoppig cart changes 2', async ()=>{
    render(<ShoppingCart products={test_products}/>);

    let i = 1;
    let a = 3;

    let lists = screen.getAllByRole('list');
    let items = within(lists[0]).queryAllByRole('listitem');
    let cartItems = within(lists[1]).queryAllByRole('listitem');
    expect(cartItems.length).toBe(0);

    await userEvent.click(items[i]);
    await userEvent.click(items[i]);
    await userEvent.click(items[a]);

    cartItems = await within(lists[1]).findAllByRole('listitem');
    expect(cartItems.length).toBe(3);

    cartItems = await within(lists[1]).findAllByText(items[i].textContent);
    expect(cartItems.length).toBe(2);

    cartItems = await within(lists[1]).findAllByText(items[a].textContent);
    expect(cartItems.length).toBe(1);
});
