import React from 'react'
import { SideBar } from 'antd-mobile'

// 导入市镇数据
import townsTabs from '../../Data/towns'
import './index.css'

export default function TownsList() {

  // 当选项发生改变的时候
  const whenChange = (key) => {
    console.log(key)
  }

  return (
    <div className='townsList'>
      <SideBar onChange={whenChange}>
          {
            townsTabs.map((item) => {
              return (
                <SideBar.Item style={{'--background-color':'#C1C1C1'}} key={item.key} title={item.title} />
              )
            })
          }
        </SideBar>
      {/* <ul>
        {
          townsTabs.map((item) => {
            return (
              <li key={item.key}>--{item.title}</li>
            )
          })
        }
      </ul> */}
    </div>
  )
}
