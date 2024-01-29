import React, { useReducer } from 'react'
import { ScreenContext } from './screenContext'
import { screenReducer } from './screenReducer'
import { CHANGE_SCREEN } from '../types'

export const ScreenState = ({ children }) => {

	const [state, dispatch] = useReducer(screenReducer, null)

	const change = id => dispatch({ type: CHANGE_SCREEN, payload: id })


	return (
		<ScreenContext.Provider value={{ change, todoId: state }}>
			{children}
		</ScreenContext.Provider>
	)
}
