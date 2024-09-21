import React, { useState } from 'react';

// Props: addTodo (function to add a todo)
export const AddTodo = ({ addTodo }) => {
  // State variables for the todo title and description
  const [title, setTitle] = useState("");
  // const [desc, setDesc] = useState("");

  // Submit function to handle the form submission
  const submit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Title or Description cannot be blank");
    } else {
      // Call the addTodo function with the title and description
      addTodo(title);
      // Clear the input fields
      setTitle("");
      // setDesc("");
    }
  };

  return (
    <div className="container my-5">
      <h3>Add a Todo</h3>
      {/* Display the form */}
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            placeholder='Write your todo work here'
          />
        </div>
        {/* <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Todo Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="form-control"
            id="desc"
          />
        </div> */}
        {/* Display the submit button */}
        <button type="submit" className="btn btn-sm btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};