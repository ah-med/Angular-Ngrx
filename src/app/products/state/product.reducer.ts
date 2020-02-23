import { Product } from '../product';


export interface ProductState {
    showProductCode: boolean;
    currentProductId: number | null;
    products: Product[];
    error: string
}

export function reducer(state, action) {
    console.log('THE Incoming Action', action);
    console.log('The incoming state ', state);
    switch (action.type) {

        case 'TOGGLE PRODUCT CODE':
            return {
                ...state,
                showProductCode: action.payload
            }
        default:
            return state
    }
}
