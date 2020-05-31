import { createStyles, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import * as React from 'react';

export interface IHomeProps {

}

const styles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            marginBottom: theme.spacing(1),
        }
    })
);

const Home: React.FunctionComponent<IHomeProps> = (props: IHomeProps) => {
    const classes = styles();

    return (
        <>
            <Typography variant="h3" className={classes.title}>Home</Typography>
        </>
    );
}

export default Home;