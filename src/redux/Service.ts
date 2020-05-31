import { RootState, BasicAction } from "./Library";
import { INCREMENT, DECREMENT, SETCOUNT } from "./CountService";
import { Action, Repository } from "./GeneralReduxService";


export const InitialState: RootState = {
    count: 0
}

// export function reducer(state = InitialState, action: BasicAction) {
//     switch (action.type) {
//         case INCREMENT:
//             return {
//                 count: state.count + 1
//             };
//         case DECREMENT:
//             return {
//                 count: state.count - 1
//             };
//         case SETCOUNT:
//             return {
//                 count: (action as SetCountAction).count
//             };
//         default:
//             return state;
//     }
// }


interface SetCountAction extends BasicAction {
    count: number;
}

const actions: Action<BasicAction>[] = [
    {
        type: "SETCOUNT",
        actionCreater: (count: number) => {
            return {
                type: "SETCOUNT",
                count
            }
        },
        dispatchAction: (state: RootState, action: SetCountAction) => {
            return {
                ...state,
                count: action.count
            };
        }
    }
]

export function reducer(state = InitialState, action: BasicAction) {
    const repository = new Repository(actions);
    console.log(repository.createAction("SETCOUNT",123))
    return repository.exportReducer(state, action);
}