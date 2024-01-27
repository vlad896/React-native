import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { AppText } from '../ui/AppText';
import { THEME } from '../theme';

export const Navbar = (props) => {
	return (
		<View style={{
			...styles.navbar, ...Platform.select({
				ios: styles.navbarIOS,
				android: styles.navbarAndroid
			})
		}}>
			<AppText style={styles.text}>{props.title}</AppText>
		</View>
	)
}

const styles = StyleSheet.create({
	navbar: {
		height: 70,
		alignItems: 'center',
		justifyContent: 'flex-end',

		paddingBottom: 10,
	},
	navbarAndroid: {
		backgroundColor: THEME.MAIN_COLOR
	},
	navbarIOS: {
		borderBottomColor: THEME.MAIN_COLOR,
		borderBottomWidth: 1,

	},
	text: {
		color: Platform.OS === 'ios' ? THEME.MAIN_COLOR : '#fff',
		fontSize: 20,
	}
})