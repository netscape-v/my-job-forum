import React, { useEffect, useRef } from 'react'
import { Card, Space, AutoCenter, Modal, Toast, PullToRefresh } from 'antd-mobile'
import { CloseOutline, CheckOutline, StopOutline } from 'antd-mobile-icons'
import { sleep } from 'antd-mobile/es/utils/sleep'
import PubSub from 'pubsub-js'
import itemList from '../../Data/itemList'
import './index.css'

export default function IsList() {

  // 此处需要一个生命周期钩子 来初始化后台数据并 展示 '今日头条' 功能

  // 重新渲染
  const onClickCard = (cardKey) => {
    PubSub.publish('isListToHome',{cardKey})
    console.log('点击了卡片', cardKey)
  }

  // 卡片内部的 X 
  const onExtraClick = () => {
    console.log('点击了卡片内部的 X ')
    Modal.show({
      content: '选择操作',
      closeOnAction: true,
      showCloseButton: true,
      actions: [
        {
          key: 'dislike',
          text: '不感兴趣',
          onClick: () => {
            Toast.show({
              icon: <CheckOutline />,
              content: '以后不再推荐',
              position: 'center',
            })
            // 减少推荐次数,活跃度靠后的flag,来决定
            console.log('减少推荐')
          },
        },
        {
          key: 'blacklist',
          text: '直接拉黑',
          onClick: () => {
            Toast.show({
              icon: <StopOutline />,
              content: '已经拉黑了',
              position: 'center',
            })
            // 拉黑业务，根据拉黑次数来决定移除数据库
            console.log('拉黑业务')
          }
        },
      ]
    })
  }

  // div 引用
  const divRef = useRef()

  // 记录锚点, 初始化锚点位置
  useEffect(() => {
    divRef.current.scrollTop = sessionStorage.getItem('scrollPosition')
  }, [])

  // 滚动记录 滚动条位置, 鼠标滚动事件
  const scrollEvt = () => {
    const scrollY = divRef.current.scrollTop
    // 本地持久化 锚点数据，sessionStorage
    sessionStorage.setItem('scrollPosition', scrollY)
  }

  // 下拉刷新属性
  const statusRecord = {
    pulling: <div style={{ color: 'white' }}>用力拉</div>,
    canRelease: <div style={{ color: 'white' }}>松开吧</div>,
    refreshing: <div style={{ color: 'white' }}>玩命加载中...</div>,
    complete: <div style={{ color: 'white' }}>好啦</div>,
  }

  return (
    // 此处还需要选择性渲染，路由
    <div className='homeList' onScroll={scrollEvt} ref={divRef}>
      <AutoCenter>
        {/* 下拉刷新 */}
        <PullToRefresh
          onRefresh={async () => {
            await sleep(2000)
            // 此处刷新操作, 重新渲染组件，重新初始化钩子
            console.log('下拉刷新')
          }}
          renderText={(status) => {
            return <div>{statusRecord[status]}</div>
          }}
        >
          <Space direction='vertical'>
            {
              itemList.map((list) => {
                return (
                  <Card
                    key={list.id}
                    // 此处需要渲染标题
                    title={<div>标题_{list.id}</div>}
                    // 点击事件
                    onBodyClick={() => { onClickCard(list.id) }}
                    // 卡片圆角大小
                    style={{ borderRadius: '10px' }}
                    // 右上角的 x 
                    extra={<div onClick={onExtraClick} className='extra'><CloseOutline /></div>}
                  >
                    <div className='card'>
                      {/* 此处渲染描述 */}
                      {list.name}
                    </div>
                  </Card>
                )
              })
            }
          </Space>
        </PullToRefresh>
      </AutoCenter>
    </div >
  )
}
