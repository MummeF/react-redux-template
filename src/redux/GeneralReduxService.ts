import { BasicAction, RootState } from "./Library";

export interface Action<T extends BasicAction> {
    type: string;
    actionCreater(...params: any[]): T;
    dispatchAction(state: RootState, action: T): RootState;
}


export class Repository {
    private actions: Action<BasicAction>[];
    constructor(actions: Action<BasicAction>[]) {
        this.actions = actions;
    }

    getActionCreater(type: string): (() => (BasicAction)) | undefined {
        for (let action of this.actions) {
            if (action.type === type) {
                return action.actionCreater;
            }
        }
        return undefined;
    }

    createAction(type: string, ...params: any) {
        for (let action of this.actions) {
            if (action.type === type) {
                return action.actionCreater(...params);
            }
        }
        return undefined;
    }


    exportReducer(state: RootState, action: BasicAction) {
        const reducer = () => {
            for (let possibleAction of this.actions) {
                if (possibleAction.type === action.type) {
                    return possibleAction.dispatchAction(state, action);
                }
            }
            return state;
        }
        return reducer();
    }
}