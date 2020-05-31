import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme, Typography, createStyles } from '@material-ui/core';

export interface IAboutProps {

}

const styles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            marginBottom: theme.spacing(1),
        }
    })
);

const About: React.FunctionComponent<IAboutProps> = (props: IAboutProps) => {
    const classes = styles();

    return (
        <>
            <Typography variant="h3" className={classes.title}>About</Typography>
        </>
    );
}

export default About;