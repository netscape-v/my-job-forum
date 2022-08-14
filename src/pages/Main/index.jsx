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

  // 组件一加载就跳到默认列表
  useEffect(() => { navigate('/main/select') }, [])

  const tabBarEvt = (isKey) => {
    navigate('/main/select', {
      state: isKey
    })
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
