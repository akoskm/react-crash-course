# What is React?

React is the most popular way to build UIs in a component-based, reusable manner.

But you probably already knew this and it's the reason why you're here. Great! 🙌

How React achieves this?

## JSX (JavaScript XML)

The greatest thing about React is that it looks familiar.

```jsx
<button>Save</button>
```

We can all agree that this is an HTML button element. But what if I told you... this is **exactly** how you create a button in React. 🤯

But don't get confused, JSX is not HTML.

It gets compiled to some internal React calls (`React.createElement()`) that's a lot more powerful than static HTML and actually turns a button into a dynamic thing.

## What is component-based?

Component based means you can create a fully-functional, self containing UI element that you can reuse across your app.

React component are functions, returning JSX.

## Quiz

Because you already know a little bit of JSX, I'll let you think a function that returns JSX. That's all!

<details>

  ```jsx
  function SaveButton () {
    return <button>Save</button>
  }
  ```

  or any other way on which you can write this, until it returns the `<button>` syntax

  <summary>Show me the answer!</summary>
</details>


## Exercise

Now let's get our hands dirty and open [0_practice.html](0_practice.html).

You'll find the instructions inside!