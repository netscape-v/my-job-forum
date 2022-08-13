import React from 'react'
import { Tabs } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'

import './index.css'

export default function Top() {
  const navigate = useNavigate()
  const tabsEvt = (key) => {
    navigate('/main/show/home/isList')
    console.log(key)
  }

  return (
    <div className='topDiv'>
      <Tabs onChange={tabsEvt}>
        <Tabs.Tab title='日常' key='fruits' />
        <Tabs.Tab title='技术' key='vegetables' />
        <Tabs.Tab title='行情' key='animals' />
      </Tabs>
    </div>
  )
}
