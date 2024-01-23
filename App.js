import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, FlatList, View } from 'react-native';
import { Navbar } from './app/Navbar';
import { AddTodo } from './app/AddTodo';
import { useState } from 'react';
import { Todo } from './app/Todo';

export default function App() {
	const [todos, setTodos] = useState([]);

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
				<AddTodo onSubmit={addTodo} />

				<FlatList
					keyExtractor={item => item.id.toString()}
					data={todos}
					renderItem={({ item }) => (<Todo todo={item} onRemove={removeTodo} />)

					}
				/>
				{/* <ScrollView >
					{todos.map(todo => (<Todo key={todo.id} todo={todo} />))}
				</ScrollView> */}
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
