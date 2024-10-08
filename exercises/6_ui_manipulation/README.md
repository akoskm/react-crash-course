# UI manipulation

In this chapter you'll learn how to manipulate the UI in JSX, show and hide certain elements from the user.

# Why it matters?

Believe it or not, for most web apps, an autocomplete or a filter-list is as complicated as a UI gets. Learning a few patterns is enough to understand most web applications—whether it's an autocomplete, some other UI filter, or a dynamic table.

# [useEffect](https://react.dev/reference/react/useEffect)

## Syntax

```jsx
useEffect(() => {
  // side effect
}, [ /* dependencies */])
```

The other frequently used built-in hook besides `useState` is `useEffect`. Think of `useEffect` as an if-then, instead of a lifecycle function.

`useEffect` runs when the values inside it's dependency array change.

So, for example, if I have a state variable called `taskName` and I want `useEffect` to print `taskName` to the console every time it changes, I'd write the following `useEffect`:

```jsx
useEffect(() => {
  console.log(taskName);
}, [taskName])
```

And if I were typing buy milk in the input, the console would should this:
```
b
bu
buy
buy
buy m
buy mi
buy mil
buy milk
```

We'll use this to display a filtered list of tasks to the user. No other JSX syntax is needed!

Let's jump into the quiz!

# Quiz

Remember the last quiz?

```jsx
function PriorityDropdown () {
  return (
    <select>
      {['Low', 'Medium', 'High'].map(
        priority => <option key={priority} value={priority}>{priority}</option>
      )}
    </select>
  );
}
```

Knowing that `{}` runs pure JavaScript, how would you modify the above function to display only those options that contains four or more characters?

💡 You can chain array function like filter and map like this:
```js
array
  .filter(element => condition) // return only the elements that satisfy "condition"
  .map(element => element) // do something with "element"
```

<details>

  ```jsx
  function PriorityDropdown () {
    return (
      <select>
        {['Low', 'Medium', 'High']
          .filter(priority => priority.length >= 4)
          .map(
          priority => <option key={priority} value={priority}>{priority}</option>
        )}
      </select>
    );
  }
  ```

  <summary>Show me the answer!</summary>
</details>

# Exercise

In this exercise, we'll build a filter component. I'll give you a list of tasks, and using a FormInput, you'll display only the tasks that begin with the text the user enters.

To achieve this, while reusing our existing component, we'll also introduce a new concept: lifting state up. In React, lifting state up means moving state from a child component to a parent component to share state between components.

Open [0_practice.html](0_practice.html).