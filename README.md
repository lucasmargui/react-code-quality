# Next.js + Jest

This example shows how to configure Jest to work with Next.js.





## Hooks 

Code snippets to run before or after each or all tests

### before 

Run code once before all tests

```bash

  // This function runs once before any of the tests in this file.
  // You can use it to set up any global state needed for your tests.
  console.log('Running before all tests');
});
```

### after 

Execute code once after all tests

```bash
afterAll(() => {
  // This function runs once after all the tests in this file have finished.
  // You can use it to clean up any global state set up in `beforeAll`.
  console.log('Running after all tests');
});
```

### beforeEach

Execute code once before each test

```bash
 beforeEach(() => {
  // This function runs before each individual test in this file.
  // You can use it to set up any state needed specifically for each test.
  console.log('Running before each test');
});
```
 
### afterEach

 Execute code once after each test

  ```bash
  afterEach(() => {
    // This function runs after each individual test in this file.
    // You can use it to clean up any state or resources created in `beforeEach`.
    console.log('Running after each test');
  });
  ```


## Mock 

### Mock Function

exemplo 1
![image](https://github.com/lucasmargui/React_Code_Quality/assets/157809964/01345ecf-77b7-4a61-a6de-7ed1085c60dd)
![image](https://github.com/lucasmargui/React_Code_Quality/assets/157809964/3257b4e7-2c3f-4238-a676-35f5b3b14e38)

example 2 
![image](https://github.com/lucasmargui/React_Code_Quality/assets/157809964/34ab2817-f88e-438c-a7f9-728cdb3ea4fa)




### Mock Fetch


example 1
![image](https://github.com/lucasmargui/React_Code_Quality/assets/157809964/7b3fa877-fecd-4205-9b3d-53caf7cfff76)
![image](https://github.com/lucasmargui/React_Code_Quality/assets/157809964/57cdee61-9789-45d4-8b0b-72225eb7ffaf)


example 2
![image](https://github.com/lucasmargui/React_Code_Quality/assets/157809964/148a2b82-99f4-4074-b8fb-68bd0731a4e4)
![image](https://github.com/lucasmargui/React_Code_Quality/assets/157809964/35fec998-d4b9-49c6-844f-24f7804f02d3)



### Mock Axios

example 1

![image](https://github.com/lucasmargui/React_Code_Quality/assets/157809964/1efc401e-61b5-417e-97a8-682407403df3)


### MockLocalStorage

![image](https://github.com/lucasmargui/React_Code_Quality/assets/157809964/7a10aecd-9081-4949-82d7-2ea78238ba52)


### Mock Import Component

![image](https://github.com/lucasmargui/React_Code_Quality/assets/157809964/572722d3-a7d6-41bc-80e3-9b388f20a114)


## Test

### api-client

- test: fetches users on component creation and renders them
- test: handles errors during fetch

### blog

- test: App Router: Works with dynamic route segments

### button

- test: renders button correctly with children
- test: calls onClick function when clicked

### component

- test: renders lazy-loaded component without crashing

### conditional

- test: displays correct message when logged in
- test: displays correct message when not logged in

### counterExample

- test: App Router: Works with Client Components (React State)

### event

- test: renders button with "Click Me" text
- test: calls onClick function when button is clicked
- test: passes event object to onClick function
- test: renders additional text when prop is provided
- test: does not render additional text when prop is not provided

### form

- test: displays error message when name and email are not provided
- test: does not display error message when name and email are provided
- test: updates name field value correctly
- test: updates email field value correctly
- test: displays error message when only name is not provided
- test: displays error message when only email is not provided
- test: clears error message when both name and email are provided after error
- test: updates error message when name is provided but email is not
- test: updates error message when email is provided but name is not

### hooks

- test: fetches data and renders it correctly
- test: displays error message if fetch fails
- test: calls fetch with correct URL

### login

- test: LoginForm component
- test: sets email and password data when input changes
- test: calls login method when form is submitted
- test: displays error message for invalid credentials
- test: logs in successfully with valid credentials

### parent-component

- test: renders child component with correct props
- test: renders correctly
- test: calls onClick function when clicked

### search-input

- test: should render input with placeholder
- test: should call onChange prop when input value changes
- test: should clear input value when clear button is clicked
- test: should not render clear button when input value is empty

### set-state

- test: Counter component
- test: increments count when button is clicked
- test: decrements count when button is clicked
- test: renders correct initial count
- test: resets count when reset button is clicked

### closures

- test: increments count when button is clicked
- test: should toggle visibility on button click
- test: renders with initial state values
- test: updates state correctly when input changes
- test: should update parent message when child component changes

### event_emitter

- test: ChildComponent button click

### high_order

- test: passes isAuthenticated prop correctly when user is authenticated
- test: passes isAuthenticated prop correctly when user is not authenticated

### promise_async

- test: fetches and displays data when the button is clicked
- test: displays an error message if fetching data fails

###  web_storage

- test: renders the counter with initial count of 0
- test: increments the count when the button is clicked
- test: retrieves count value from localStorage on component mount

### context_api

- test: renders "Login" button when user is not logged in
- test: renders "Logout" button when user is logged in

### hooks

- test: TitleUpdater component
- test: updates the document title when the button is clicked
- test: updates the count when the button is clicked

### lifecycle_component

- test: renders with initial count value and button
- test: increments count when button is clicked
- test: updates count every second
- test: clears timer on unmount


### code_splitting

- test: renders all components

### lazy_loading_image

- test: renders with placeholder initially

### memoization

- test: calculates factorial correctly

### backend

- test: fetches and displays data when the button is clicked
- test: displays an error message if fetching data fails

### fetch_data

- test: fetches and displays data when the button is clicked
- test: displays an error message if fetching data fails
  




This includes Next.js' built-in support for Global CSS, CSS Modules and TypeScript. This example also shows how to use Jest with the App Router and React Server Components.

> **Note:** Since tests can be co-located alongside other files inside the App Router, we have placed those tests in `app/` to demonstrate this behavior (which is different than `pages/`). You can still place all tests in `__tests__` if you prefer.


In your terminal, run the following command:

```bash
npx create-next-app --example with-jest with-jest-app
```

## Running Tests

```bash
npm run test
```


