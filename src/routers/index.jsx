import Login from "../Users/Login"
import Register from '../Users/Register'
import Wellcome from "../Users/Wellcome"

import Mian from "../Componets"

import Home from "../Componets/Exhibit/Home"
import Factory from "../Componets/Exhibit/Factory"
import Message from "../Componets/Exhibit/Message"
import Personal from "../Componets/Exhibit/Personal"

// 路由表
export default [
  { path: '/', element: <Wellcome /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  {
    path: '/main', element: <Mian />, children: [
      { path: 'Home', element: <Home /> },
      { path: 'Factory', element: <Factory /> },
      { path: 'Message', element: <Message /> },
      { path: 'Personal', element: <Personal /> },
    ]
  },
]