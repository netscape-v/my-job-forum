import { NavBar } from 'antd-mobile'
import { useNavigate, useLocation } from 'react-router-dom'

import './index.css'
export default function DetailArea() {
  // 路由跳转
  const navigate = useNavigate()

  // 获取路由参数
  const { state } = useLocation()

  // 从详情页返回默认展示区
  const back = () => {
    console.log(state)
    navigate('/main')
  }
  return (
    <div className="detailArea">
      <NavBar onBack={back}>标题</NavBar>
    </div>
  )
}