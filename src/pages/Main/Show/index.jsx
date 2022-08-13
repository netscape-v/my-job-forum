import React from 'react'
import { useLocation } from 'react-router-dom'

import Home from './Home'
import Factory from './Factory'
import Message from './Message'
import Personal from './Personal'

export default function Show() {
  const { state: isKey } = useLocation()
  // 根据Key值 呈现不同的组件标签
  switch (isKey) {
    case 'home':
      return (
        <Home />
      )
    case 'factory':
      return (
        <Factory />
      )
    case 'message':
      return (
        <Message />
      )
    case 'personal':
      return (
        <Personal />
      )
    default:
      return (
        <Home />
      )
  }
}
