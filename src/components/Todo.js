import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'reactstrap';

const Todo = ({
  removeTodo,
  toggleTodo,
  completed,
  text
}) => (
    <ListGroupItem
      style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <div
        onClick={toggleTodo}
        style={{
          textDecoration: completed ? 'line-through' : 'none',
          flex: 1
        }}
      >
        {text}
      </div>
      <button
        onClick={removeTodo}
      >
        Delete
    </button>
    </ListGroupItem>
  )

Todo.propTypes = {
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
