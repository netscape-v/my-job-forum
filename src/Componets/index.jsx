import { useEffect } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import Options from './Options'
import './index.css'

export default function Main() {
  const navigate = useNavigate()
  const { state } = useLocation()

  useEffect(() => {
    // 告诉 main组件该展示哪里
    switch (state === null ? 'main' : state.area) {
      case 'main':
        navigate('/main/Home')
        break;
      case 'factory':
        navigate('/main/Factory')
        break;
      default:
        navigate('/main/Home')
        break;
    }
  }, [])

  return (
    <div className='rootDiv'>
      <Outlet />
      {/* 如果路由的state 为空，默认去的地方就是Home */}
      <Options activeKey={state === null ? 'Home' : state.key} />
    </div>
  )
}