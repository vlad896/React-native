import React, { useEffect, useState, useContext } from "react";
import { View, StyleSheet, FlatList, Image, Dimensions } from "react-native";
import { AddTodo } from "../components/AddTodo";
import { Todo } from "../components/Todo";
import { THEME } from '../theme';
import { TodoContext } from '../context/todo/todoContext';
import { ScreenContext } from '../context/screen/screenContext';

export const MainScreen = () => {

	const { addTodo, todos, removeTodo, updateTodo } = useContext(TodoContext)
	const { change } = useContext(ScreenContext)

	return (
		<View>
			<AddTodo onSubmit={addTodo} />
			{todos.length !== 0 ? (
				<FlatList
					keyExtractor={(item) => item.id.toString()}
					data={todos}
					renderItem={({ item }) => (
						<Todo todo={item} onRemove={removeTodo} onOpen={change} />
					)}
				/>

			) : (
				<View style={styles.ImageW}>
					<Image style={styles.image} source={require('../../assets/no-items.png')} />
				</View>
			)}
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
