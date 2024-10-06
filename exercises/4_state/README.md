# State

In this chapter you'll learn how to manipulate component state using the `setState` function.

# Why it matters?

Most of the time you want to develop components that can track their state. In case of the `FormInput` component that would be the text the user typed into the `input`.

💡 React uses a one-way data flow, where user inputs trigger state update and those updates are reflected on the UI.

# The useState hook

Besides JSX, Composition and Props, hooks are another set of features of React. They let you write business logic for your components.

☕️ [Here](https://react.dev/reference/react/hooks) you can find all the built-in React hooks.

💡 The most important rule you have to remember for hooks is that they should only be called at the top level of your React function components.

# Syntax

To define a state variable that initially holds an empty string, you’d write this inside your component:

```jsx
const [text, setText] = React.useState('');
```

Calling the useState hook returns an array with two members:
 1) in our case `text`, is the current value of the state `text`
 2) `setText` is a state setter function that you can use to update the value of `text`

State setter functions are typically named with the prefix `set` followed by the name of the state variable.

Calling state setter functions cause the component to re-render.

# Quiz

Knowing the structure of a state that can track the value of `text`, how would you modify the `FormInput` component so that it tracks the text the user entered into the input field?

💡 To extract the current value of the input field, use the `onChange` event of the input element:

```jsx
<input type="text" onClick={(event) => {
  const currentValue = event.target.value;
}} />
```

<details>

  ```jsx
  function FormInput ({ labelText }) {
    const [text, setText] = React.useState('');

    return (
      <label>
        {labelText}
        <input type="text" onClick={(event) => {
          const currentValue = event.target.value;
          setText(currentValue)
        }} />
      </label>
    );
  }
  ```
  <summary>Show me the answer!</summary>
</details>

# Understanding Controlled and Uncontrolled Inputs

In React, input elements can be controlled or uncontrolled. Let's see the difference between the two:

- **Controlled Inputs**: The value of the input is controlled by React state. This means that the value of the input is always in sync with the state. To update the value of the input, you need to update the state.

- **Uncontrolled Inputs**: The value of the input is not controlled by React state. Instead, it's managed by the DOM itself. To get the value of an uncontrolled input, you need to use a ref.

In the previous example with the `FormInput` component, we used an **uncontrolled** input.

The value of the input was controlled by the `text` state, even though we updated the state whenever the user typed something in the input field.

To make the input inside `FormInput`, we only have to control the value using our state variable `text`. Here's the controlled version of the input and we'll use this version in the exercise:

```jsx
function FormInput ({ labelText }) {
  const [text, setText] = React.useState('');

  return (
    <label>
      {labelText}
      <input type="text" value={text} onClick={(event) => {
        const currentValue = event.target.value;
        setText(currentValue)
      }} />
    </label>
  );
}
```

# Exercise

Let’s modify the `FormInput` component so that it displays the text the user entered below the input field.

Open [0_practice.html](0_practice.html).