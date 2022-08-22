import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PubSub from 'pubsub-js'

import { Card, Space, AutoCenter } from 'antd-mobile'

// 这是一堆假数据，真数据要从后台获取
import towns from '../../Data/towns'

import './index.css'
export default function FactoryList() {
  const [realKey, setRealKey] = useState('')
  // 获取item的key
  // 第一个生命周期钩子
  useEffect(
    () => {
      // 订阅消息
      const token = PubSub.subscribe('townsToFactory', (_, data) => {
        setRealKey(data.key)
      })

      // 卸载时取消订阅
      return (
        () => {
          PubSub.unsubscribe(token)
        }
      )
    }, [])

  // 第二个生命周期钩子
  useEffect(
    () => {
      // 执行锚点
      scrollToAnchor()

      // 在这里发axios请求,根据key值获取详情
      // console.log('这里发axios请求')
    }, [realKey])

  // 设置锚点函数
  const scrollToAnchor = () => {
    // H5 锚点，锚点在overflow 的管控区才会有效
    document.getElementById('factoryDetailsId').scrollTo({ top: -100, behavior: 'smooth' })
    // document.getElementById('townsDetailsId').scrollIntoView()
  }

  // 点击卡片跳转到卡片工厂详情
  const navigate = useNavigate()
  const onBodyClick = (key) => {
    navigate('/factoryDetails', { state: key })
  }

  return (
    <div className='factoryDetails'>
      <div id='factoryDetailsId' className='factoryDetails-2'>
        <AutoCenter>
          <Space style={{ '--gap': '8px' }} block direction='vertical'>
            {
              towns.map((item) => {
                return (
                  <Card
                    key={item.key}
                    title={<div>工厂名称，在此处</div>}
                    onBodyClick={() => { onBodyClick(item.key) }}
                  >
                    <div className='cardDiv'>
                      {/* 地址和 营业信息 */}
                      {item.title}
                    </div>
                  </Card>
                )
              })
            }
          </Space>
        </AutoCenter>
      </div>
    </div>
  )
}
