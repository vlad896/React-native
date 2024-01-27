import { StyleSheet, View, Alert } from "react-native";
import * as Font from 'expo-font'
import { useFonts } from 'expo-font';
import { Navbar } from "./app/components/Navbar";
import * as SplashScreen from 'expo-splash-screen'
import { useCallback, useEffect, useState } from "react";
import { AppLoading } from 'expo'
import { MainScreen } from "./app/screens/MainScreen";
import { TodoScreen } from "./app/screens/TodoScreen";

SplashScreen.preventAutoHideAsync();

export default function App() {
	const [todos, setTodos] = useState([
		{ id: "1", title: "Выучить React Native" },
		{ id: "2", title: "Написать приложение" },
	]);
	const [todoId, setTodoId] = useState(null);
	const [fontsLoaded, fonstError] = useFonts({
		'roboto-regular': require('./assets/Fonts/Roboto-Regular.ttf'),
		'roboto-bold': require('./assets/Fonts/Roboto-Bold.ttf')
	})

	const onLoyoutRootView = useCallback(async () => {
		if (fontsLoaded || fonstError) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded, fonstError]);

	if (!fontsLoaded && !fonstError) {
		return null
	}
	const addTodo = (title) => {
		setTodos((prev) => [
			...prev,
			{
				id: Date.now().toString(),
				title: title,
			},
		]);
	};

	const removeTodo = (id) => {
		const todo = todos.find((t) => t.id === id);
		Alert.alert(
			"Удаление элемента",
			`Вы уверены что ходите удалить "${todo.title}"`,
			[
				{
					text: "Cancel",
					style: "cancel",
				},
				{
					text: "Удаление",
					style: "destructive",
					onPress: () => {
						setTodoId(null);
						setTodos((prev) => prev.filter((todo) => todo.id !== id));
					},
				},
			],
			{ cancelable: false }
		);
	};

	const updateTodo = (id, title) => {
		setTodos(old => old.map(todo => {
			if (todo.id === id) {
				todo.title = title
			}
			return todo
		}))
	}

	return (
		<View onLayout={onLoyoutRootView}>
			<Navbar title="ToDo App" />
			<View style={styles.container}>
				{todoId !== null ? (
					<TodoScreen
						goBack={() => setTodoId(null)}
						onRemove={removeTodo}
						todo={todos.find((todo) => todo.id === todoId)}
						onSave={updateTodo}
					/>
				) : (
					<MainScreen
						onSubmit={addTodo}
						todos={todos}
						onRemove={removeTodo}
						onOpen={(id) => {
							setTodoId(id);
						}}
					/>
				)}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 30,
		paddingVertical: 20,
	},
});




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


//const [loading, setLoading] = useState(false)
// async function loadApplication() {
// 	await Font.loadAsync({
// 		'roboto-regular': require('./assets/Fonts/Roboto-Regular.ttf'),
// 		'roboto-bold': require('./assets/Fonts/Roboto-Bold.ttf')
// 	})
// }

// if (!loading) {
// 	return (
// 		<AppLoading startAsync={loadApplication} onFinish={() => setLoading(true)} />
// 	)
// }

// useEffect(() => {
// 	async function loadApplication() {
// 		try {
// 			await Font.loadAsync({
// 				'roboto-regular': require('./assets/Fonts/Roboto-Regular.ttf'),
// 				'roboto-bold': require('./assets/Fonts/Roboto-Bold.ttf')
// 			})
// 			await new Promise(resolve => setTimeout(resolve, 2000));
// 		} catch (e) {
// 			console.warn(e);
// 		} finally {
// 			setLoading(true)
// 		}
// 	}
// 	loadApplication();
// }, []);