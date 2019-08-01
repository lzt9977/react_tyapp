import * as React from "react"
import { Route } from "react-router-dom"

const NestedRoute = (route:any) => (
  <Route path={route.path} exact={route.exact}
    render={(props) => <route.component {...props} router={route.routes} />}
  />
)

export default NestedRoute;
