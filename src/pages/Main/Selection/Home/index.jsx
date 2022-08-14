import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import Top from './Top'
import './index.css'

export default function Home() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/main/select/home/isList')
  }, [])

  return (
    <div className='homeDisplay'>
      {/* 顶部展示 */}
      <Top />
      {/* 主要区 */}
      <Outlet />
    </div>
  )
}
