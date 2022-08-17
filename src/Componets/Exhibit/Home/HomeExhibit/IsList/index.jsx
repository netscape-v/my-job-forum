import React from 'react'
import { List, Card, Space } from 'antd-mobile'

import itemList from '../../Data/itemList'
import './index.css'

export default function IsList() {
  
  const clickCard = () => {
    console.log('点击了卡片')
  }
  return (
    <div className='homeList'>
      {<List>
        {
          itemList.map((list) => {
            return (
              <List.Item key={list.id}>
                <Card onClick={clickCard}>{list.name}</Card>
              </List.Item>
            )
          })
        }
      </List>}
    </div>
  )
}
