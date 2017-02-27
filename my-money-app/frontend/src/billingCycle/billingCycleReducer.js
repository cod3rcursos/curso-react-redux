const INITIAL_STATE = {list: [], initialValues: {}}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'BILLING_CYCLES_FETCHED':
            return { ...state, list: action.payload.data }
        case 'BILLING_CYCLE_SELECTED':
            return { ...state, initialValues: action.payload }
        case 'BILLING_CYCLE_CANCELED':
            return { ...state, initialValues: INITIAL_STATE.initialValues }
        default:
            return state
    }
}