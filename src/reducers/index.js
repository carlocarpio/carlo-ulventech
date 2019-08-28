import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

/*
** ISSUE: todos must not be spread, todos: ...todos
** FROM: ...todos
** TO: todos / todos: todos
*/
export default combineReducers({
  todos,
  visibilityFilter
})
