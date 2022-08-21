import { useEffect, useState } from "react"
import PubSub from "pubsub-js"

import Home from './Home'
import Factory from './Factory'
import Message from './Message'
import Personal from './Personal'

// 主要选项栏
export default function Exhibit() {
  // 管理key的状态
  const [realKey, setKey] = useState('')
  // 展示区订阅option发布的消息key
  useEffect(() => {
    let isToken = PubSub.subscribe('option2exhibit', (_, data) => {
      // 改变状态，switch 就会切换到key所对应的组件
      setKey(data.isKey)
    })
    // 组件卸载停止订阅
    return () => { PubSub.unsubscribe(isToken) }
  }, [])

  switch (realKey) {
    case 'Factory':
      return (
        <Factory />
      )
    case 'Message':
      return (
        <Message />
      )
    case 'Personal':
      return (
        <Personal />
      )
    default:
      return (
        <Home />
      )
  }
}