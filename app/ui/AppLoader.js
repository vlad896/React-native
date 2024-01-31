import React from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'
import { THEME } from '../theme'

export const AppLoader = () => {
	return (
		<View style={style.center}>
			<ActivityIndicator size={'large'} color={THEME.MAIN_COLOR} />
		</View>
	)
}
const style = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center'
	}
})
