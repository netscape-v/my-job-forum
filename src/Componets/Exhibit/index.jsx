import { useEffect, useState } from "react"
import PubSub from "pubsub-js"

import Home from './Home'
import Factory from './Factory'
import Message from './Message'
import Personal from './Personal'

export default function Exhibit() {
  const [realKey, setKey] = useState('')
  useEffect(() => {
    let isToken = PubSub.subscribe('option2exhibit', (_, data) => {
      setKey(data.isKey)
    })
    return () => { PubSub.unsubscribe(isToken) }
  }, [])

  switch (realKey) {
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