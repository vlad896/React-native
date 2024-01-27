import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import { THEME } from "../theme";
import { AppCard } from "../ui/AppCard";
import { EditModal } from "../components/EditModal";
import { AppTextBold } from '../ui/AppTextBold';
export const TodoScreen = ({ goBack, todo, onRemove, onSave }) => {
	const [modal, setModal] = useState(false);

	const saveHandler = (title) => {
		onSave(todo.id, title)
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
				<Button title="Редактировать" onPress={() => setModal(true)} />
			</AppCard>

			<View style={styles.buttonContainer}>
				<View style={styles.button}>
					<Button title="Назад" onPress={goBack} />
				</View>
				<View style={styles.button}>
					<Button
						title="Удалить"
						onPress={() => onRemove(todo.id)}
						color={THEME.DANGER_COLOR}
					/>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
	},
	button: {
		width: "40%",
	},
	title: {
		fontSize: 20,
	},
	card: {
		marginBottom: 20,
		padding: 15,
	},
});
