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
    // 从详情页返回, 从state中可以知道 底部活跃的key和该去的组件
    navigate('/main', { state: { area: 'main', key: 'Home' } })
  }
  return (
    <div className="detailArea">
      <NavBar onBack={back}>标题</NavBar>
      <div className='detailDiv'>
        {state}
      </div>
    </div>
  )
}