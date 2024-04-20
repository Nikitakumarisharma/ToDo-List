import React from 'react'
import { TodoItem } from "./todoitem"; // Import the TodoItem component

// Props: todos (array of todos), onDelete (function to delete a todo)
export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="my-3">Todos List</h3>
      {
        // Check if there are any todos to display
        props.todos.length === 0 ? (
          <p>No Todos to display</p>
        ) : (
          // Map over the todos array and return a TodoItem component for each todo
          props.todos.map((todo) => {
            console.log(todo.sno);
            return (
              <TodoItem
                todo={todo} // Pass the todo object as a prop to the TodoItem component
                key={todo.sno} // Set a unique key for each TodoItem component
                onDelete={props.onDelete} // Pass the onDelete function as a prop to the TodoItem component
              />
            )
          })
        )
      }
    </div>
  )
}