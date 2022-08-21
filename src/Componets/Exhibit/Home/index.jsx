import { useState, useEffect } from 'react'
import { NavBar } from 'antd-mobile'
import PubSub from 'pubsub-js'
import HomeExhibit from './HomeExhibit'
import Top from './Top'
import './index.css'

export default function Home() {

  // 卡片的cardKey 的状态
  const [cardKey, setCardKey] = useState('back')

  // 组件一挂载就开始订阅
  useEffect(() => {
    // 订阅cardKey
    const token = PubSub.subscribe('isListToHome', (_, data) => {
      console.log(data.cardKey)
      // 改变cardKey的状态
      setCardKey(data.cardKey)
    })
    return (
      // 组件卸载一定取消订阅
      () => {
        PubSub.unsubscribe(token)
      }
    )
  }, [])

  // 状态管理钩子
  const [key, setKey] = useState('')

  // 取key 值
  const getKey = (key) => setKey(key)

  // Exhibit 展示区选择性展示，在渲染时获取到将要被渲染的 key， 根据key 获取到组件
  const changeKey = () => key

  // 从详情页返回默认展示区
  const back = () => {
    setCardKey('back')
  }

  // 这里展示卡片详情 , 只需要让Home根据key重新渲染
  // 保留 tobbar 总感觉不雅观, 可能还是需要路由来实现
  if (cardKey != 'back') {
    return (
      // 需要定义组件
      <div className='cardDetails'>
        <NavBar onBack={back}>标题</NavBar>
      </div>
    )
  } else {
    // 回默认展示区
    return (
      <div className='list'>
        {/* 顶部展示 select 选择反馈key的函数 */}
        <Top select={getKey} />
        {/* 主要区 */}
        <HomeExhibit changeKey={changeKey} />
      </div>
    )
  }
}
