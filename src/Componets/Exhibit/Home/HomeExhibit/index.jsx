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
      return <IsList />
  }
}
