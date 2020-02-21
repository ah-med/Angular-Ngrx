export function reducer(state, action) {
    switch (action.type) {

        case 'TOGGEL PRODUCT CODE':
            return {
                ...state,
                showProductCode: action.payload
            }
        default:
            return state
    }
}
