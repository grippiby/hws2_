type SwitchThemeType = {
	type: 'SET_THEME_ID'
	id: number
}
export type StateType<T> = { themeId: T }

const initState = {
	themeId: 1,
}

export const themeReducer = (
	state: StateType<number> = initState,
	action: SwitchThemeType
): StateType<number> => {
	// fix any
	switch (action.type) {
		// дописать
		case 'SET_THEME_ID':
			return {
				...state,
				themeId: action.id,
			}
		default:
			return state
	}
}

export const changeThemeId = (id: number): SwitchThemeType => ({
	type: 'SET_THEME_ID',
	id,
}) // fix any
