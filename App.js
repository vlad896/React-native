
import { StyleSheet, View } from 'react-native';
import { Navbar } from './app/components/Navbar';

import { useState } from 'react';

import { MainScreen } from './app/screens/MainScreen';
import { TodoScreen } from './app/screens/TodoScreen';

export default function App() {
	const [todos, setTodos] = useState([
		{ id: '1', title: 'Выучить React Native' },
		{ id: '2', title: 'Написать приложение' }
	])
	const [todoId, setTodoId] = useState('2')

	const addTodo = (title) => {
		// const newTodo = {
		// 	id: Date.now().toString(),
		// 	title: title
		// }

		// setTodos((preTodos) => {
		// 	return [
		// 		...preTodos,
		// 		newTodo
		// 	]
		// })

		setTodos(prev => [...prev, {
			id: Date.now().toString(),
			title: title
		}])
	}

	const removeTodo = id => {
		setTodos(prev => prev.filter(todo => todo.id !== id))
	}


	return (
		<View>
			<Navbar title='ToDo App' />
			<View style={styles.container}>
				{todoId !== null
					? <TodoScreen goBack={() => setTodoId(null)} onRemove={removeTodo} todo={todos.find(todo => todo.id === todoId)} />
					: <MainScreen onSubmit={addTodo} todos={todos} onRemove={removeTodo} onOpen={(id) => {
						setTodoId(id)
					}} />}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 30,
		paddingVertical: 20
	}
}
);
