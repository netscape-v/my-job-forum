import React from 'react'
import { Tabs } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'

import './index.css'

export default function Top() {
  const navigate = useNavigate()
  const tabsEvt = (key) => {
    switch (key) {
      case 'technology':
        navigate(`/main/select/home/technology`)
        break
      case 'quotation':
        navigate(`/main/select/home/quotation`)
        break
      default:
        navigate(`/main/select/home/isList`)
        break
    }
  }

  return (
    <div className='topDiv'>
      <Tabs onChange={tabsEvt}>
        <Tabs.Tab title='日常' key='everyday' />
        <Tabs.Tab title='技术' key='technology' />
        <Tabs.Tab title='行情' key='quotation' />
      </Tabs>
    </div>
  )
}
