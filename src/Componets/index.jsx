import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Options from './Options'
import './index.css'

export default function Main() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/main/home')
  }, [])

  return (
    <div className='rootDiv'>
      <Outlet />
      <Options />
    </div>
  )
}