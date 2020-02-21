import { ComponentFactoryResolver } from '@angular/core';

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
