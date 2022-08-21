import { NoticeBar, List, SwipeAction } from 'antd-mobile'

import Top from './Top'
import './index.css'

// 假数据，真数据来自后台
import msg from './Data'

export default function Message() {
  return (
    <div className='message'>
      <Top />
      <div className='message-2'>
        <NoticeBar content='这条通知可以关闭' color='alert' closeable />
        <List>
          {
            msg.message.map((item) =>
              <SwipeAction
                key={item.id}
                leftActions={msg.leftActions}
                rightActions={msg.rightActions}
              >
                <div className='message-3'>
                  {/* 此处用户消息 */}
                  <List.Item>{item.message}</List.Item>
                </div>
              </SwipeAction>
            )
          }
        </List>
      </div>
    </div>
  )
}
