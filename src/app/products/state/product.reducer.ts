import { Product } from '../product';
import * as fromRoot from '../../state/app.state';

export interface State extends fromRoot.State {
    products: ProductState
}


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
