# Composition

In this exercise you'll learn to compose a UI from multiple components.

# Why it matters?

The true power of React comes from being able to combine many components, such as the `SaveButton` you created earlier, into a bigger component, such as a form.

# The Form Input component

Knowing the basic building blocks of a format input, such as `<label>` and `<input type="text">`, we'll build a form input component we can reuse in our Todo app.

But first let's take a short quiz!

# Quiz

How a React component would look like for a form input that contains the label "Task name" and a text input?

<details>

  ```jsx
  function FormInput () {
    return (
      <label>
        Task name
        <input type="text">
      </label>
    );
  }
  ```
  <summary>Show me the answer!</summary>
</details>