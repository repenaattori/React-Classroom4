import { useState } from 'react'

function App() {

  return (
    <></>
  )
}


export function ToggleLayout() {

  return (
    <div>
      <label>
        <input type='checkbox' />
        Register
      </label><br />
      <label>Username:</label>
      <input type='text' /><br />
      <label>Password:</label>
      <input type='text' /><br />
      <div>
        <label data-testid='fname'>First name:</label>
        <input type='text' /><br />
        <label data-testid='lname'>Last name:</label>
        <input type='text' /><br />
      </div>
    </div>
  )
}


//Example array that you may use to test your ShoppingCart component,
const test_products = [
  { id: 0, name: 'iPhone 16', quantity: 0 },
  { id: 1, name: 'Ryzen 5 5600',  quantity: 0 },
  { id: 2, name: 'PS5',  quantity: 0 },
  { id: 3, name: 'Genelec 8010A',  quantity: 0 },
  { id: 4, name: 'Canon EOS R50',  quantity: 0 },
]

export function ShoppingCart({ products }) {

  return (
    <div>
      
    </div>
  )
}


export function ShoppingCartAdvanced({ products }) {
  
  return (
    <div>
     
    </div>
  )
}

export default App
