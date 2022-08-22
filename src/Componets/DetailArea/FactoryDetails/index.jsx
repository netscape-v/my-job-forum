import { useLocation, useNavigate } from 'react-router-dom'
import { NavBar } from 'antd-mobile'

import './index.css'
export default function FactoryDetails() {
  const { state } = useLocation()
  const navigate = useNavigate()
  
  const back = () => {
    // 返回携带了标识符，区域和所在组件活跃的key
    navigate('/main', { state: { area: 'factory', key: 'Factory' } })
  }
  return (
    <div className="factoryDetails-1">
      {/* 返回 */}
      <NavBar onBack={back}>标题</NavBar>
      <div className='factoryDetails-2'>
        {/* 详情页数据填充处 */}
        FactoryDetails--{state}
      </div>
    </div>
  )
}