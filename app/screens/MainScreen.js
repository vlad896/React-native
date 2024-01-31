import React, { useEffect, useState, useContext, useCallback } from "react";
import { View, StyleSheet, FlatList, Image, Dimensions } from "react-native";
import { AddTodo } from "../components/AddTodo";
import { Todo } from "../components/Todo";
import { THEME } from '../theme';
import { TodoContext } from '../context/todo/todoContext';
import { ScreenContext } from '../context/screen/screenContext';
import { AppLoader } from '../ui/AppLoader'

export const MainScreen = () => {

	const { addTodo, todos, removeTodo, fetchTodo, loading, error } = useContext(TodoContext)
	const { change } = useContext(ScreenContext)

	const loadTodos = useCallback(async () => await fetchTodo(), [fetchTodo])

	useEffect(() => {
		loadTodos()
	}, [])

	if (loading) {
		return <AppLoader />
	}

	let content = (
		<View>
			<FlatList
				keyExtractor={(item) => item.id.toString()}
				data={todos}
				renderItem={({ item }) => (
					<Todo todo={item} onRemove={removeTodo} onOpen={change} />
				)}
			/>
		</View>
	)

	if (todos.length === 0) {
		content = (
			<View style={styles.ImageW}>
				<Image style={styles.image} source={require('../../assets/no-items.png')} />
			</View>
		)
	}



	return (
		<View>
			<AddTodo onSubmit={addTodo} />
			{content}
		</View>
	);
};

const styles = StyleSheet.create({
	ImageW: {
		alignItems: 'center',
		justifyContent: "center",
		padding: 10,
		height: 300,
	},
	image: {
		width: '100%',
		height: "100%",
		resizeMode: 'contain',
	}
});

// const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2)

// useEffect(() => {
// 	const update = () => {
// 		const width = Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2
// 		setDeviceWidth(width)
// 	}
// 	Dimensions.addEventListener('change', update)

// 	return () =>
// 		update.remove();
// })
