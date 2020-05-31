import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";


import HomeIcon from '@material-ui/icons/Home';
import { NavLink } from "react-basic-routing";

export default class Header extends React.Component {

    render() {
        return <>
            <AppBar position="sticky">
                <Toolbar>
                    <Button color="primary" variant="text" startIcon={<HomeIcon />} component={NavLink} to="/">Home</Button>
                </Toolbar>
            </AppBar>
        </>
    }
}