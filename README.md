# js-katas-template

Use this template to create your own katas project.\
This project uses `mocha` for testing and `babel` to use ES Modules in the spec files.

You can add as many katas as you want, just add a new `kata-N.js` file into the `src` folder, and his own `kata-N.spec.js` file into the `test` folder.

**Note:** *The katas and tests here are mere examples. Use this as a template for your own project and add some real katas to it.*

## How to test the code

Run `npm install` to install all the project dependencies.\
Run `npm test` to check all the test files.\
Run `npm run test1` to check only the tests with the #kata-1 `describe` section, i.e. kata-1.spec.js file.\
Run `npm run test2` to check only the tests with the #kata-2 `describe` section, i.e. kata-2.spec.js file.

Once running any test command, mocha will watch for changes in the `src` folder.

If you add more katas to the project and want to test their own test files separately, add a new script in the `package.json` file, following the "test1" script, and adapting it to your test's `describe` section.

## How to define Kata requirements

First of all we define what the objective of the kata is.\
Then we provide some examples of the results.

Let's see a full example:

> Implement a function that, given a number, returns the reversed number.\
> Example 1:

    Input: 987
    Output: 789

> Example 2:

    Input: 554956
    Output: 659455

> Example 3:

    Input: 1080
    Output: 0801
