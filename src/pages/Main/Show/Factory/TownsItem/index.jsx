import React from 'react'
import { SideBar } from 'antd-mobile'

// 导入市镇数据
import townsTabs from '../Data/towns'
import './index.css'

export default function IsList(props) {
  const townsList = props.townsList

  const whenChange = (key) => {
    townsList(key)
  }

  return (
    <div className='townsList'>
      <SideBar onChange={whenChange}>
        {
          townsTabs.map((item) => {
            return (
              <SideBar.Item key={item.key} title={item.title} />
            )
          })
        }
      </SideBar>
    </div>
  )
}
