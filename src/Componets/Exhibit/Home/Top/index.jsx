import React from 'react'
import { Tabs } from 'antd-mobile'

import './index.css'

export default function Top(props) {
  const tabsEvt = (key) => {
    props.select(key)
  }

  return (
    <div className='topDiv'>
      <Tabs onChange={tabsEvt}>
        <Tabs.Tab title='日常' key='everyday' />
        <Tabs.Tab title='技术' key='technology' />
        <Tabs.Tab title='数据' key='jobdata' />
      </Tabs>
    </div>
  )
}
