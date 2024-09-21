import React from 'react'
import { TodoItem } from "./todoitem"; // Import the TodoItem component

// Props: todos (array of todos), onDelete (function to delete a todo)
// Inside Todos.js:
export const Todos = (props) => {
  return (
    <div className="container addtodo">
      <h3 className="my-3 list">Todos List</h3>
      <hr /> 
      {/* <hr />  is used for horixontal line*/}
      {props.todos.length === 0 ? (
        <p>No Todos to display</p>
      ) : (
        props.todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.sno}
            onDelete={props.onDelete}
            onEdit={props.onEdit}
          />
        ))
      )}
    </div>
  );
};
