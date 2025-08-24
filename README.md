# USE STATE AND EVENTS
# Erillinen Forms-tehtävä.

# Install all the packages
npm i

# To test your code
npm test
# To run individual tests by test number
npm test -- test1

# Exercise 1
Inside App.jsx create and export a component named 'BasicButton'. By default the button has text "Submit". When you click the button, the
text changes to "Done"

# Exercise 2
Inside App.jsx create and export a component named 'ShowText' containing textfield and h3 element. Each time inputting a character in the textfield, the result text is updated into h3 element.

# Exercise 3
Inside App.jsx create and export a component named 'Welcome' containing textfield and button. When user inputs a name, pressing the button shows a h3 header containing text "Welcome name!" (the name being the input like 'Welcome John!')
The header is not in the UI until the button is pressed (conditional rendering)
You need two states: text for textfield and e.g. boolean for showing the h3 element.

# Exercise 4
Inside App.jsx there's a predefined component named ToggleLayout. Modify the component
so that the user may toggle the first name and last name inputs visible/hidden by using the checkbox. By default the checkbox is not checked and the first name/last name are hidden.

 # Exercise 5
Inside App.jsx create and export a component named FillList. The component contains a button and a list that is empty by default. Pressing the button adds a new list item with text content of next number increment: The first click adds 0, the second 1 and so on.

# Exercise 6
Inside App.jsx create and export a component named AddUsers. The component has text inputs for name, age and hobby (in this order) and a button. When the button is clicked, the user information (object) is saved in a state array. All the added users are displayed in an html list (ul, li). Example of the list output here:

 - John Doe,22,running
 - Lisa Simpson,34,swimming
 - Matt Bell,44,music

# Exercise 7
Inside App.jsx there's a predefined component ShoppingCart that has an array of products as props. Each product has id and name. 

In the component show the product names in a list. 

Create also another list that shows the shopping cart which is empty by default.
If the user clicks some product in the product list, the product name is added into the shopping cart list.

In the image cart.png you see and example of the UI after clicking some products. In the code there's predefined example test list containing some products for you.

# Exercise 8
Create an advanced version of the ShoppingCart component in ShoppingCartAdvanced (predefined in the App.jsx). The functionality is similar to exercise 6, but if the same product is added multiple times, the product quantity is displayed. An example in the image cart2.png. Use the same format with exact white spaces like "1 x PS5". 

You may use the product ID as an identifier for adding same product.
Some good tools for this task is array functions some and map.
