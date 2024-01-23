import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native';
import { AddTodo } from '../components/AddTodo';
import { Todo } from '../components/Todo';

export const MainScreen = ({ onSubmit, onRemove, todos, onOpen }) => {
	return (
		<View>
			<AddTodo onSubmit={onSubmit} />

			<FlatList
				keyExtractor={item => item.id.toString()}
				data={todos}
				renderItem={({ item }) => (<Todo todo={item} onRemove={onRemove} onOpen={onOpen} />)

				}
			/>
		</View>
	)
}

const styles = StyleSheet.create({

})