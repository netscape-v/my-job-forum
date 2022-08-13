import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AutoCenter } from 'antd-mobile'

import './index.css'
export default function Wellcome() {

  const navigate = useNavigate()

  function toLogin() {
    setTimeout(
      () => { navigate('/login') }, 1000)
  }
  return (
    <div className='well'>
      <AutoCenter>
        <h1 style={{ color: '#C042FF' }}>wellcome！</h1>
        <AutoCenter>
          <a onClick={toLogin}>点击登录！</a>
        </AutoCenter>
      </AutoCenter>
    </div>
  )
}
