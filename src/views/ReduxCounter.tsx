import { Button, createStyles, Grid, TextField, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import * as React from 'react';
import { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { DecrementAction, IncrementAction, setCountAction } from '../redux/CountService';
import { RootState } from '../redux/Library';
export interface IReduxCounterProps {
}

const styles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            border: "1px solid grey",
            width: "12em",
            margin: "auto",
        }
    })
);

const ReduxCounter: React.FunctionComponent<IReduxCounterProps> = (props: IReduxCounterProps) => {
    const classes = styles();

    const count = useSelector((state: RootState) => state.count);
    const [setter, setSetter] = useState(count);

    const dispatch = useDispatch();

    const increment = () => {
        dispatch(IncrementAction);
    }
    const decrement = () => {
        dispatch(DecrementAction);
    }

    const setCount = () => {
        dispatch(setCountAction(setter));
    }

    return (
        <>
            <Typography variant="h3">Counter</Typography>
            <Grid container className={classes.root} justify="center" spacing={1} alignItems="center">
                <Grid item><Button onClick={decrement}>-</Button></Grid>
                <Grid item><Typography variant="body1">{count}</Typography></Grid>
                <Grid item><Button onClick={increment}>+</Button></Grid>
            </Grid>
            <Grid container className={classes.root} justify="center" spacing={1} alignItems="center">
                <Grid item><TextField value={setter} onChange={event => setSetter(+event.target.value)} ></TextField></Grid>
                <Grid item><Button onClick={setCount}>Set</Button></Grid>
            </Grid>
        </>
    );
}


function mapStatesToProps(state: RootState) {
    return {
        count: state.count
    }
}

export default connect(mapStatesToProps)(ReduxCounter);