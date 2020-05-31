import React from "react";
import { BasicRoute, DynamicRoute } from "react-basic-routing";
import About from "../views/About";
import Home from "../views/Home";

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
        component: About,
        exact: true
    },
]
