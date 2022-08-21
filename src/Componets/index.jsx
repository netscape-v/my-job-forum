import { useEffect } from 'react'
import { Outlet,useNavigate } from 'react-router-dom'
import Options from './Options'
import Exhibit from './Exhibit'
export default function Main() {
  const navigate =useNavigate()
  useEffect(() => {
    navigate('/main/home')
  },[])
  
  return (
    <>
      {/* <Exhibit /> */}
      <Outlet/>
      <Options />
    </>
  )
}