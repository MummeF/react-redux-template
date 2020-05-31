export interface RootState {
    count: number;
}

export interface BasicAction {
    type: string;
}

export interface SetCountAction extends BasicAction{
    count: number;
}