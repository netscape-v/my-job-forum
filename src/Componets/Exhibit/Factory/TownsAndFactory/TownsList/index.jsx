import React, { useEffect } from 'react'
import PubSub from 'pubsub-js'
import { SideBar } from 'antd-mobile'

// 导入市镇数据
import townsTabs from '../../Data/towns'
import './index.css'

export default function TownsList() {

  useEffect(() => {
    whenChange()
  }, [])

  // 当选项发生改变的时候
  const whenChange = (key = '01') => {
    PubSub.publish('townsToFactory', { key })
  }

  return (
    <div className='townsList'>
      <SideBar onChange={whenChange}>
        {
          townsTabs.map((item) => {
            return (
              <SideBar.Item style={{ '--background-color': '#C1C1C1' }} key={item.key} title={item.title} />
            )
          })
        }
      </SideBar>
    </div>
  )
}
