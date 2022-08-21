import React from 'react'
import { Badge, TabBar } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'

import PubSub from 'pubsub-js'
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'

import './index.css'

export default function Options() {
  const navigate = useNavigate()
  const tabBarEvt = (isKey) => {
    // PubSub.publish('option2exhibit', { isKey })
    navigate(`/main/${isKey}`)
  }

  // 标签
  const tabs = [
    {
      key: 'Home',
      title: '首页',
      icon: <AppOutline />,
      badge: Badge.dot,
    },
    ,
    {
      key: 'Factory',
      title: '工厂',
      icon: <UnorderedListOutline />,
      badge: '5',
    },
    {
      key: 'Message',
      title: '我的',
      icon: (active) =>
        false ? <MessageFill /> : <MessageOutline />,
      badge: '99+',
    },
    {
      key: 'Personal',
      title: '个人',
      icon: <UserOutline />,
    },
  ]
 
  return (
    <>
      {/* 下面菜单栏 */}
      <div className='tabBar'>
        <TabBar onChange={tabBarEvt}>
          {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} badge={item.badge} />
          ))}
        </TabBar>
      </div>
    </>
  )
}
