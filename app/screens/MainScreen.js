import React from "react";
import { View, StyleSheet, FlatList, Text, Image } from "react-native";
import { AddTodo } from "../components/AddTodo";
import { Todo } from "../components/Todo";

export const MainScreen = ({ onSubmit, onRemove, todos, onOpen }) => {
	return (
		<View>
			<AddTodo onSubmit={onSubmit} />
			{todos.length !== 0 ? (
				<FlatList
					keyExtractor={(item) => item.id.toString()}
					data={todos}
					renderItem={({ item }) => (
						<Todo todo={item} onRemove={onRemove} onOpen={onOpen} />
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
