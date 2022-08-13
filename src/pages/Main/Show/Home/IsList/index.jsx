import React, { useEffect } from 'react'
import { List, Space } from 'antd-mobile'
import Scroll from 'react-scroll'

import itemList from '../Data/itemList'
import './index.css'

export default function IsList() {
  const scroller = Scroll.scroller
  const Element = Scroll.Element

  useEffect(() => {
    scroller.scrollTo('homeEle', {
      duration: 1000,
      delay: 200,
      smooth: true,
      offset: -1000
    })
  }, [])

  return (
    <Element className='homeList' name='homeList'>
      <List>
        <Space style={{ '--gap': '25px', '--gap-vertical': '5px' }} direction='vertical'>
          {
            itemList.map((list) => {
              return (
                <List.Item key={list.id}>
                  <h3>本店特色--{list.name}</h3>
                </List.Item>
              )
            })
          }
        </Space>
      </List>
    </Element>

  )
}
