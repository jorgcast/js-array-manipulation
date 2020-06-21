# JS Katas - Array manipulation

These katas involve array manipulation. The perfect way to know a few array methods that maybe you didn't know they exist.

Resolve every Kata in its own file, following its description bellow.

Launch the unit tests in order to check the correct solution of the Katas.

The solutions must be uploaded to a public github/gitlab repository.

## How to test the code

This project uses `mocha` for testing and `babel` to use ES Modules in the spec files.

Run `npm install` to install all the project dependencies.\
Run `npm test` to check all the test files.\
Run `npm run test1` to check only the tests with the #kata-1 `describe` section, i.e. kata-1.spec.js file.\
Run `npm run test2` to check only the tests with the #kata-2 `describe` section, i.e. kata-2.spec.js file.

Run `npm run testX` to check only the tests with the #kata-X `describe` section, i.e. kata-X.spec.js file.

### Kata 1

**Objectives:** Remove duplicate values: new Set().

Given a sorted array of int numbers, write a function that returns true when the array has duplicate values.

Example 1:

    Input: [1, 1, 2, 2, 3, 5, 9, 9]
    Output: true
    Explanation: The filtered array is [1, 2, 3, 5, 9].

Example 2:

    Input: [7, 7, 19]
    Output: true
    Explanation: The filtered array is [7, 19].

Example 3:

    Input: [95, 114]
    Output: false
    Explanation: The filtered array is [95, 114].

### Kata 2

**Objectives:** Add and remove elements to an array: push, pop, shift, unshif.

Write a function that adds or removes an element at the first or last position of an array.

Example 1:

    Input: ([1, 6, 9], 'add_first', 5)
    Output: [5, 1, 6, 9]

Example 1:

    Input: ([1, 6, 9], 'remove_first')
    Output: [6, 9]

Example 1:

    Input: ([1, 6, 9], 'add_last', 7)
    Output: [1, 6, 9, 7]

Example 1:

    Input: ([1, 6, 9], 'remove_last')
    Output: [1, 6]

**Superpower:** Call functions as object attributes.

### Kata 3

**Objectives:** Modify every element of an array: forEach.

Add a new field called 'year' to all of the clients and return the new array.

    const clients = [
        { id: '1', name: 'Solid Snake' },
        { id: '2', name: 'Liquid Snake' },
        { id: '3', name: 'Solidus Snake' },
    ];

Example:

    Input: (clients, 2020)
    Output: [
        { id: '1', name: 'Solid Snake', year: 2020 },
        { id: '2', name: 'Liquid Snake', year: 2020 },
        { id: '3', name: 'Solidus Snake', year: 2020 },
    ]

### Kata 4

**Objectives:** Create a new array from an original array: map.

Given an array of characters, write a function that returns a new array containing only the character's names. Assume that every object has always the name prop.

    const characters = [
        { id: '1', name: 'Simba' },
        { id: '2', name: 'Timon' },
        { id: '3', name: 'Pumbaa' },
    ];

Example:

    Input: (characters)
    Output: ['Simba', 'Timon', 'Pumbaa']

### Kata 5

**Objectives:** Create a modified array without modifying the original data: array.filter vs array.find, immutability and cloning objects, passing arguments by reference and by value.

Given an array of users, write a function to update a user's firstname by passing its id.\
This function should return the new modified array, and the original array without modification.

**Note:** Assume that every user object has always a unique id, a firstname and a lastname, and no other attribute.

    const users = [
        { id: '1', firstname: 'Rick', lastname: 'Sanchez' },
        { id: '2', firstname: 'Morty', lastname: 'Smith' },
    ];

Example 1:

    Input: (users, '1', 'Tiny Rick')
    Output: [[
        { id: '1', firstname: 'Tiny Rick', lastname: 'Sanchez' },
        { id: '2', firstname: 'Morty', lastname: 'Smith' },
    ],[
        { id: '1', firstname: 'Rick', lastname: 'Sanchez' },
        { id: '2', firstname: 'Morty', lastname: 'Smith' },
    ]]

Example 2:

    Input: (users, '2', 'Evil Morty')
    Output: [[
        { id: '1', firstname: 'Rick', lastname: 'Sanchez' },
        { id: '2', firstname: 'Evil Morty', lastname: 'Smith' },
    ],[
        { id: '1', firstname: 'Rick', lastname: 'Sanchez' },
        { id: '2', firstname: 'Morty', lastname: 'Smith' },
    ]]

### Kata 6

**Objectives:** Know if a prop of every element of an array has the same value: every, some.

Write a function to know if every product in our basket has a shipping cost of 0.\
Write another function to know if at least one product has a shipping cost more than 0.

    const basket = [
        { id: '1', name: 'PokeBall', shippingCost: 0 },
        { id: '2', name: 'SuperBall', shippingCost: 3 },
        { id: '3', name: 'UltraBall', shippingCost: 5 },
    ];

Example 1:

    Input: (basket, 'all')
    Output: false

Example 2:

    Input: (basket)
    Output: true

### Kata 7

**Objectives:** Convert an array to string and viceversa: join, split.

Given an array of humans, write a function that returns a human centipede as a string, in which you can choose the connector symbol.\
If no symbol is sent, the function returns the humans with no connector.

Example 1:

    Input: (['mother', 'son', 'father'], '-')
    Output: 'mother-son-father'

Example 2:

    Input: (['aunt', 'grandma', 'uncle'], '**')
    Output: 'aunt**grandma**uncle'

Example 3:

    Input: (['man', 'woman'])
    Output: 'manwoman'

**Superpower:** Strings can be splitted up an converted to array with the String.split method. The same way, we can pass a symbol to act as the separator.

### Kata 8

**Objectives:** Create a new array from many arrays: concat, spread operator, rest params, flat, simple sort.

Given many arrays, create a new one and sort it.

Example 1:

    Input: (
        ['Hulk', 'Thor', 'Captain (North) America'],
        ['IronMan', 'Black Widow', 'Hawkeye']
    )
    Output: [
        'Black Widow',
        'Captain (North) America',
        'Hawkeye',
        'Hulk',
        'IronMan',
        'Thor',
    ]

### Kata 9

**Objectives:** Sort an array by an object property: sort.

Given an array of products, write a function to sort it by a variable prop. Assume every product will have name and category properties.

**Note:** Be aware that sort mutates the original array.

    const products = [
        { name: 'roomba', category: 'home' },
        { name: 'iPad', category: 'electronics' },
        { name: 'lego Star Wars', category: 'toys' },
    ];

Example 1:

    Input: (products, 'name')
    Output: [
        { name: 'iPad', category: 'electronics' },
        { name: 'lego Star Wars', category: 'toys' },
        { name: 'roomba', category: 'home' },
    ]

Example 2:

    Input: (products, 'category')
    Output: [
        { name: 'iPad', category: 'electronics' },
        { name: 'roomba', category: 'home' },
        { name: 'lego Star Wars', category: 'toys' },
    ]

**Superpower:** Arrays can also be reversed, but this method doesn't admit a callback or function to reverse the array following a certain condition. The reverse method reverses the given array. Be careful: the reverse method mutates the original array. Use it wisely.

### Kata 10

**Objectives:** Create a new array based on an original array: slice.

Given an array of numbers, write a function that returns a subarray based on the start and the end position. The end position is an optional parameter.

Example 1:

    Input: ([1, 2, 3], 0, 1)
    Output: [1]
    Explanation: start position is 0 and the end position is 1.

Example 2:

    Input: ([1, 2, 3], 1, 2)
    Output: [2]
    Explanation: start position is 1 and the end position is 2.

Example 3:

    Input: ([1, 2, 3], 1)
    Output: [2, 3]
    Explanation: start position is 1 with no end position.

### Kata 11

**Objectives:** Remove and add elements from an array based on the position: splice.

Given an array of numbers, write a function that returns a modified array that has removed as many elements as passed in the selected position. It can also insert new values at the removal position.

**Note:** Be aware that splice mutates the original array.

Example 1:

    Input: ([1, 2, 3], 1, 1, 8)
    Output: [1, 8, 3]

Example 2:

    Input: ([1, 2, 3], 7, 1)
    Output: [1, 2, 3]

Example 3:

    Input: ([1, 2, 3], 0, 3, 5)
    Output: [5]

Example 4:

    Input: ([1, 2, 3], 0, 0, 6)
    Output: [6, 1, 2, 3]

### Kata 12

**Objectives:** Use the array to create another type of data: reduce.

Given a supermarket ticket, as an array of products and prices, write a function that returns the total amount of money spent.

Example:

    Input: [
        { product: 'cheese steak jimmys', price: 7 },
        { product: 'natural wonders', price: 5 },
        { product: 'aegis', price: 14 },
        { product: 'rock on', price: 9 },
    ]
    Output: 35

**Superpowers:** It also exists a reduceRight method to apply a function to every element of an array starting from the last.
