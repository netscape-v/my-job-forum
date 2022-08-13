import React from 'react'
import { useRoutes } from 'react-router-dom'

import routers from './routers'

export default function App() {

  // const element = useRoutes(routers)
  return (
    <div>
      {/* 路由视图区 */}
      {useRoutes(routers)}
    </div>
  )
}
