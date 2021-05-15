
export const tokenReducer = (state = { amount:{} }, action) => {
	switch (action.type){
		case 'TOKEN_CALC':
			return { 
				amount: action.payload, 
			}

		default:
			return state
	}
}