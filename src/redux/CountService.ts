import { SetCountAction } from "./Library";



export const INCREMENT: string = "INCREMENT";
export const DECREMENT: string = "DECREMENT";
export const SETCOUNT: string = "SETCOUNT";

export const IncrementAction = {
    type: INCREMENT
}

export const DecrementAction = {
    type: DECREMENT
}

export const setCountAction = (count: number): SetCountAction => {
    return {
        type: SETCOUNT,
        count
    }
}