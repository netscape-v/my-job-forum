import { useState } from 'react'
import HomeExhibit from './HomeExhibit'
import Top from './Top'

import './index.css'
export default function Home() {

  // 状态管理钩子
  const [key, setKey] = useState('')

  // 取key 值
  const getKey = (key) => setKey(key)

  // Exhibit 展示区选择性展示，在渲染时获取到将要被渲染的 key， 根据key 获取到组件
  const changeKey = () => key

  return (
    <div className='list'>
      {/* 顶部展示 select 选择反馈key的函数 */}
      <Top select={getKey} />
      {/* 主要区 */}
      <HomeExhibit changeKey={changeKey} />
    </div>
  )
}
