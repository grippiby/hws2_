export type MyInitStateType = {
	isLoading: boolean
}
//может выше и не надо

const initState: MyInitStateType = {
	isLoading: false,
}

export const loadingReducer = (
	state = initState,
	action: LoadingActionType
): MyInitStateType => {
	// fix any
	switch (action.type) {
		case 'CHANGE_LOADING': {
			return {
				isLoading: action.isLoading,
			}
		}
		// пишет студент  // need to fix
		default:
			return state
	}
}

type LoadingActionType = {
	type: 'CHANGE_LOADING'
	isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
	type: 'CHANGE_LOADING',
	isLoading,
})
