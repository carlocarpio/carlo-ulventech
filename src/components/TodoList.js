import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'reactstrap';
import Todo from './Todo';

const TodoList = ({
  todos,
  toggleTodo,
  removeTodo
}) => (
    <ListGroup
      style={{
        marginTop: 10,
        marginBottom: 10
      }}
    >
      {todos && todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          toggleTodo={() => toggleTodo(todo.id)}
          removeTodo={() => removeTodo(todo.id)}
        />
      )}
    </ListGroup>
  )

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func
}

export default TodoList
