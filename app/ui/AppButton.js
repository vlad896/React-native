import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { AppTextBold } from './AppTextBold'
import { THEME } from '../theme'

export const AppButton = ({ children, onPress, color = THEME.DANGER_COLOR, colorText = THEME.TEXT_COLOR }) => {
	return (
		<TouchableOpacity onPress={onPress} activeOpacity={0.7}>
			<View style={{ ...styles.button, backgroundColor: color }}>
				<AppTextBold style={{ ...styles.text, color: colorText }}>
					{children}
				</AppTextBold>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		flexDirection: 'row',
		borderRadius: 5,
		alignItems: "center",
		justifyContent: 'center',
	}
})