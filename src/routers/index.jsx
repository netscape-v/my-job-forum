import Login from "../Users/Login"
import Register from '../Users/Register'
import Wellcome from "../Users/Wellcome"

import Mian from "../Componets"

// 路由表
export default [
  { path: '/', element: <Wellcome /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/main', element: <Mian /> },
]