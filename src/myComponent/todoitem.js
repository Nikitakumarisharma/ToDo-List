import React, { useState } from 'react';

export const TodoItem = ({ todo, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Update the todo title with the new value
    onEdit({ ...todo, title: newTitle });
    setIsEditing(false);
  };

  return (
    <>
      <div>
        {isEditing ? (
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="form-control"
          />
        ) : (
          <h4>{todo.title}</h4>
        )}

        <button
          className="btn btn-sm btn-danger mx-2 my-4"
          onClick={() => onDelete(todo)}
        >
          Delete
        </button>
        {isEditing ? (
          <button className="btn btn-sm btn-success " onClick={handleSave}>
            Save
          </button>
        ) : (
          <button className="btn btn-sm btn-primary" onClick={handleEdit}>
            Edit
          </button>
        )}
      </div>
      <hr />
    </>
  );
};