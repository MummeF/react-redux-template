import React from "react";
import { BasicRoute, DynamicRoute } from "react-basic-routing";
import About from "../views/About";
import Home from "../views/Home";
import ReduxCounter from "../views/ReduxCounter";

export const routes: (BasicRoute | DynamicRoute)[] = [

    {
        path: "/",
        name: "Home",
        child: <Home />,
        exact: true
    },
    {
        path: "/about",
        name: "About",
        child: <About />,
        exact: true
    },
    {
        path: "/counter",
        name: "Counter",
        child: <ReduxCounter />,
        exact: true
    },
]
