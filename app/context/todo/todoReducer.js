import { ADD_TODO, REMOVE_TODO, UPD_TODO } from '../types'

export const todoReducer = (state, action) => {

	switch (action.type) {
		case ADD_TODO:
			return {
				...state, todos: [...state.todos, {
					id: Date.now().toString(),
					title: action.title,
				}]
			}
		case REMOVE_TODO:
			return { ...state, todos: state.todos.filter(todo => todo.id !== action.id) }
		case UPD_TODO:
			return {
				...state, todos: state.todos.map(todo => {
					if (todo.id === action.id) {
						todo.title = action.title
					}
					return todo
				})
			}
		default:
			return state
	}
}