import React, { useState, useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Navbar } from './components/Navbar'
import { THEME } from './theme'
import { MainScreen } from "./screens/MainScreen";
import { TodoScreen } from './screens/TodoScreen'
import { TodoContext } from './context/todo/todoContext';
import { ScreenContext } from './context/screen/screenContext';

export const MainLayout = () => {
	const { todoId } = useContext(ScreenContext)
	return (
		<View>
			<Navbar title="ToDo App" />
			<View style={styles.container}>
				{todoId ? <TodoScreen /> : <MainScreen/>}
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


	// let content = (
	// 	<MainScreen/>
	// )

	// if (todoId) {
	// 	content = (
	// 		<TodoScreen
		
	// 		/>
	// 	)
	// }


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