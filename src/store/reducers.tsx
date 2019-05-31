import * as I from 'immutable';

export interface IActions {
    type: string,
    payload: any,
}

export function reducers(store: I.Map<string, any>, action: IActions): I.Map<string, any> {
    switch (action.type) {
        default:
            return store;
    }
}