# UI manipulation

In this chapter you'll learn how to manipulate the UI in JSX, show and hide certain elements from the user.

# Why it matters?

Believe it or not, for most web apps, an autocomplete is as complicated as a UI gets. Learning a few patterns is enough to understand most web applications—whether it's an autocomplete, some other UI filter, or a dynamic table.

# Syntax

No special syntax need here! We already learned that JSX is capable of running plan JavaScript. Let's jump into the quiz!

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