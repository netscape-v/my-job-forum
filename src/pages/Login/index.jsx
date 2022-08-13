import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './index.css'

import {
  Button, Space, Avatar, AutoCenter, Input
} from 'antd-mobile'

export default () => {

  // 编程式路由导航API
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const usernameRef = useRef()
  const passwordRef = useRef()

  // 登录业务
  const loginBtn = () => {
    console.log('登录成功跳转到下一个')
    console.log(username, password)
    navigate('/main', {
      state: { name: username }
    })
  }

  // 清空
  const clearBtn = () => {
    console.log(passwordRef.current)
    usernameRef.current.clear(setUsername(''))
    passwordRef.current.clear(setPassword(''))

    console.log('清空完毕')
  }
  // 注册跳转区
  const registerBtn = () => {
    navigate('/register')
    console.log('跳')
  }

  return (
    <div>
      <div className='login'>

        <AutoCenter className='portrait'>
          {/* 头像展示区 */}
          <Avatar src='' />
        </AutoCenter>

        <AutoCenter>
          <Input
            placeholder='请输入用户名'
            value={username}
            ref={usernameRef}
            onChange={(value) => {
              setUsername(value)
            }}
          />

          <Input
            placeholder='请输入密码'
            value={password}
            ref={passwordRef}
            onChange={(value) => {
              setPassword(value)
            }}
          />
        </AutoCenter>

        <AutoCenter className='btn1'>
          <Space style={{ '--gap': '50px' }}>
            <Button onClick={loginBtn} color='success'>登录</Button>
            <Button onClick={clearBtn} color='success'>清空</Button>

            <Button onClick={registerBtn} color='warning'>注册</Button>
          </Space>
        </AutoCenter>
      </div>
    </div>
  )
}
