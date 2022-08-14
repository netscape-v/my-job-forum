import React, { useState } from 'react'

import Top from './Top'
import TownsItem from './TownsItem'
import TownsDetails from './TownsDetails'

import './index.css'

export default function Factory() {

  const [detailsData, setDetailsData] = useState('01')

  const getItemKey = (value) => {
    setDetailsData(value)
  }

  return (
    <div className='factoryArea'>
        {/* 顶部宣传栏 */}
        <Top />
        {/* 城市列表 */}
        <TownsItem townsList={getItemKey} />
        {/* 城市详情页 */}
        <TownsDetails showData={detailsData} />
    </div>

  )
}
