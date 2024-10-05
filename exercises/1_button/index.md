# Event handing

In this exercise you'll learn how to handle events with React.

## Why it matters?

Interactive elements are the at heart of every web-application. Activating a button can start network requests, show or hide different parts of the UI.

## Button Component
We already talked about how JSX looks like HTML.

This similarity doesn't end at tag names, like `<button>`, but extends to attributes as well.

The standard HTML button inherits the global attributes of HTML elements, including the event handler attribute `onclick`. The only difference is, React uses `camelCase` naming in JSX.

💭 What do you think, what would be the correct JSX event handler for `onclick`?

<details>

  You guessed right, it’s `onClick`!

  <summary>Reveal the answer!</summary>
</details>

## Quiz

`onClick`, similar to the HTML button’s `onclick` receives a function. When the button is clicked the function runs.

Now make your save button show an alert to the user. You can use `alert('Button clicked!')` for this.

<details>

  ```
  function SaveButton () {
    return <button onClick={() => alert('Button clicked!')}>Save</button>
  }
  ```
  <summary>Show me the answer!</summary>
</details>

Now let's take this a step further by observing the even object that gets into this function.

Open [0_practice.html](0_practice.html).

You'll find the instructions inside!