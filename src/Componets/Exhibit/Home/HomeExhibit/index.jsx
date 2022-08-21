import React from 'react'
import IsList from './IsList'
import JobData from './JobData'
import Technology from './Technology'

export default function HomeExhibit(props) {
  // 获取key 
  const key = props.changeKey()
  // 根据key 返回对应的组件
  switch (key) {
    case 'technology':
      return <Technology />
    case 'jobdata':
      return <JobData />
    default:
      // 此处需要一个路由，来选择性渲染展示区的详情 并且加上评论功能
      return <IsList />
  }
}
