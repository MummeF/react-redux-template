import { makeStyles, setRef } from "@material-ui/core";
import React from "react";
import BasicRouter, { BasicRoute, DynamicRoute } from "react-basic-routing";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
export default function Root() {
    // const theme = useTheme();
    const isMobile = React.useRef(window.innerWidth < 480);
    React.useEffect(() => {
        setRef(isMobile, window.innerWidth < 480)
    });
    const useStyles = makeStyles({
        root: {
            margin: "auto",
            marginBottom: "2.5em",
            marginTop: "2.5em",
            width: isMobile.current ? "85%" : "75%",
        },
    });

    const classes = useStyles();
    const routes: (BasicRoute | DynamicRoute)[] = [

    ]

    const beforeRoutes = (<>
        <Header />
    </>)
    const afterRoutes = (<>
        <Footer />
    </>)

    return <>
        <BasicRouter routes={routes}
            nameToWindowTitle
            beforeRoutes={beforeRoutes}
            afterRoutes={afterRoutes}
            routesClassName={classes.root}
        />
    </>
}