import Login from "../pages/Login"
import Register from '../pages/Register'
import Wellcome from "../pages/Wellcome"
import Mian from "../pages/Main"
import Show from "../pages/Main/Show"
import Home from "../pages/Main/Show/Home"
import IsList from "../pages/Main/Show/Home/IsList"
import Factory from "../pages/Main/Show/Factory"

// 路由表
export default [
  { path: '/', element: <Wellcome /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  {
    path: '/main', element: <Mian />, children: [
      {
        path: 'show', element: <Show />, children: [
          {
            path: 'home', element: <Home />, children: [
              { path: 'isList', element: <IsList /> }
            ]
          },
          {
            path: 'factory', element: <Factory />
          }
        ]
      }
    ]
  },
]