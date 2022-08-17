import React from 'react'
import { Badge, TabBar } from 'antd-mobile'
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

  const tabBarEvt = (isKey) => {
    PubSub.publish('option2exhibit', { isKey })
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
      {/* 下面菜单栏 */}
      <div className='tabBar'>
        <TabBar safeArea onChange={tabBarEvt}>
          {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} badge={item.badge} />
          ))}
        </TabBar>
      </div>
    </>
  )
}
