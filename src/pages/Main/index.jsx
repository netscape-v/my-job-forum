import React, { useEffect } from 'react'
import { useLocation, useNavigate, Outlet } from 'react-router-dom'
import { Badge, TabBar } from 'antd-mobile'
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'

import '../Main/index.css'

export default function Mian() {

  const navigate = useNavigate()
  useEffect(() => { navigate('/main/show/home/isList') }, [])

  const tabBarEvt = (isKey) => {
    navigate('/main/show', {
      state: isKey
    })
    console.log(isKey)
  }

  // 标签
  const tabs = [
    {
      key: 'home',
      title: '首页',
      icon: <AppOutline />,
      badge: Badge.dot,
    },
    ,
    {
      key: 'factory',
      title: '工厂',
      icon: <UnorderedListOutline />,
      badge: '5',
    },
    {
      key: 'message',
      title: '我的',
      icon: (active) =>
        false ? <MessageFill /> : <MessageOutline />,
      badge: '99+',
    },
    {
      key: 'personal',
      title: '个人',
      icon: <UserOutline />,
    },
  ]

  // 接收用户名
  const { state: name } = useLocation()

  const meet = () => {
    console.log(name)
  }
  return (
    <>
      {/* 展示区 */}
        <Outlet />
        
      {/* 下面菜单栏 */}
      <div className='tabBar'>
        <TabBar safeArea onChange={tabBarEvt}>
          {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} badge={item.badge}/>
          ))}
        </TabBar>
      </div>
    </>
  )
}
