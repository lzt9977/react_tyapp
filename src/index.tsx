import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import { Redirect, Switch, BrowserRouter } from "react-router-dom";
import RouterMap, { NestedRoute } from "./router";


ReactDOM.render(
    <div>
        <BrowserRouter>
            <Switch>
                {RouterMap.map((route, i) => (
                    <NestedRoute {...route} key={i} />
                ))}
                <Redirect from="/" to="/home" exact={true} />
            </Switch>
        </BrowserRouter>
    </div>,
    document.getElementById("root")
);
