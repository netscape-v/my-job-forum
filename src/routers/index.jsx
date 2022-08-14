import Login from "../pages/Login"
import Register from '../pages/Register'
import Wellcome from "../pages/Wellcome"
import Mian from "../pages/Main"
import Selection from "../pages/Main/Selection"
import Home from "../pages/Main/Selection/Home"
import IsList from "../pages/Main/Selection/Home/IsList"
import Factory from "../pages/Main/Selection/Factory"
import Quotation from "../pages/Main/Selection/Home/Quotation"
import Technology from "../pages/Main/Selection/Home/Technology"

// 路由表
export default [
  { path: '/', element: <Wellcome /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  {
    path: '/main', element: <Mian />, children: [
      {
        path: 'select', element: <Selection />, children: [
          {
            path: 'home', element: <Home />, children: [
              { path: 'isList', element: <IsList /> },
              { path: 'quotation', element: <Quotation /> },
              { path: 'technology', element: <Technology /> }
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