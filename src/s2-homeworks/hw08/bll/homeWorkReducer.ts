import { UserType } from '../HW8'

type ActionType =
	| { type: 'sort'; payload: 'up' | 'down' }
	| { type: 'check'; payload: number }

export const homeWorkReducer = (
	state: UserType[],
	action: ActionType
): UserType[] => {
	// need to fix any
	switch (action.type) {
		case 'sort': {
			if (action.payload === 'up') {
				let newState = state.sort((a, b) =>
					a.name.localeCompare(b.name)
				)
				return newState
			}
			if (action.payload === 'down') {
				let newState = state.sort((a, b) =>
					b.name.localeCompare(a.name)
				)
				return newState
			}
			return [...state]
		}
		case 'check': {
			return state.filter((el) => el.age > action.payload) // need to fix
		}
		default:
			return state
	}
}
