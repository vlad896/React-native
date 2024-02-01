import React, { useState, useContext } from "react";
import { StyleSheet, View, Button, Dimensions } from "react-native";
import { THEME } from "../theme";
import { FontAwesome, AntDesign } from '@expo/vector-icons'
import { AppCard } from "../ui/AppCard";
import { EditModal } from "../components/EditModal";
import { AppTextBold } from '../ui/AppTextBold';
import { AppButton } from '../ui/AppButton';
import { TodoContext } from '../context/todo/todoContext';
import { ScreenContext } from '../context/screen/screenContext';
export const TodoScreen = () => {
	const [modal, setModal] = useState(false);

	const { removeTodo, updateTodo, todos } = useContext(TodoContext)
	const { todoId, change } = useContext(ScreenContext)

	const todo = todos.find(t => t.id === todoId)

	const saveHandler = async (title) => {
		await updateTodo(todo.id, title)
		setModal(false)
	}
	return (
		<View>
			<EditModal
				visible={modal}
				onClose={() => setModal(false)}
				todo={todo.title}
				onSave={saveHandler}
			/>
			<AppCard style={styles.card}>
				<AppTextBold style={styles.title}>{todo.title}</AppTextBold>
				<AppButton color={THEME.MAIN_COLOR} onPress={() => setModal(true)} >
					<FontAwesome name='edit' size={20} />
				</AppButton>
			</AppCard>

			<View style={styles.buttonContainer}>
				<View style={styles.button}>
					<AppButton color={THEME.GREY_COLOR} onPress={() => change(null)}>
						<AntDesign name='back' size={20} color='#fff' />
					</AppButton>
				</View>
				<View style={styles.button}>
					<AppButton
						onPress={() => removeTodo(todo.id)}
						color={THEME.DANGER_COLOR}
					>
						<FontAwesome name='remove' size={20} color='#fff' />
					</AppButton>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	button: {
		//width: Dimensions.get('window').width / 3
		width: Dimensions.get('window').width > 400 ? 120 : 100
	},
	title: {
		fontSize: 20,
	},
	card: {
		marginBottom: 20,
		padding: 15,
	},
});
