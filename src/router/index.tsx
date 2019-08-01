import loadable from "@loadable/component"
import NestedRoute from "./NestedRoute"


const RouterMap = [
  {
    path: "/home",
    component: loadable(() => import(/* webpackChunkName: 'index' */ "../pages/home/Home")),
  },
  {
    path: "/circle",
    component: loadable(() => import(/* webpackChunkName: 'channel' */ "../pages/circle/Circle")),
  },
  {
    path: "/user",
    component: loadable(() => import(/* webpackChunkName: 'ranking' */ "../pages/user/User")),
  }
]

export default RouterMap
export {
  NestedRoute
}