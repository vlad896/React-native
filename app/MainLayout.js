import React, { useState, useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Navbar } from './components/Navbar'
import { THEME } from './theme'
import { MainScreen } from "./screens/MainScreen";
import { TodoScreen } from './screens/TodoScreen'
import { TodoContext } from './context/todo/todoContext';
import { ScreenContext } from './context/screen/screenContext';

export const MainLayout = () => {
	const { todos, addTodo, removeTodo, updateTodo } = useContext(TodoContext)
	const { todoId, change } = useContext(ScreenContext)
	// const [todos, setTodos] = useState([]);
	//const [todoId, setTodoId] = useState(null);

	// const addTodo = (title) => {
	// 	setTodos((prev) => [
	// 		...prev,

	// 	]);
	// };

	// const removeTodo = (id) => {
	// 	const todo = todos.find((t) => t.id === id);
	// 	Alert.alert(
	// 		"Удаление элемента",
	// 		`Вы уверены что ходите удалить "${todo.title}"`, 
	// 		[
	// 			{
	// 				text: "Cancel",
	// 				style: "cancel",
	// 			},
	// 			{
	// 				text: "Удаление",
	// 				style: "destructive",
	// 				onPress: () => {
	// 					setTodoId(null);
	// 					setTodos((prev) => prev.filter((todo) => todo.id !== id));
	// 				},
	// 			},
	// 		],
	// 		{ cancelable: false }
	// 	);
	// };

	// const updateTodo = (id, title) => {
	// 	setTodos(old => old.map(todo => {
	// 		if (todo.id === id) {
	// 			todo.title = title
	// 		}
	// 		return todo
	// 	}))
	// }

	let content = (
		<MainScreen
			onSubmit={addTodo}
			todos={todos}
			onRemove={removeTodo}
			onOpen={change}
		/>
	)

	if (todoId) {
		const selectTodo = todos.find((todo) => todo.id === todoId)
		content = (
			<TodoScreen
				goBack={() => change(null)}
				onRemove={removeTodo}
				todo={selectTodo}
				onSave={updateTodo}
			/>
		)
	}

	return (
		<View>
			<Navbar title="ToDo App" />
			<View style={styles.container}>
				{content}
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		paddingHorizontal: THEME.PADDING_HORIZONTAL,
		paddingVertical: 20,
	},
});
