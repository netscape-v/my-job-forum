import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './index.css'

import {
  Button, Avatar, Input
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
    <div className='login'>
      <div className='portrait'>
        {/* 头像展示区 */}
        <Avatar style={{'--size':'80px'}} src='' />
      </div>

      <div className='input1'>
        <Input
          placeholder='请输入用户名'
          value={username}
          ref={usernameRef}
          onChange={(value) => {
            setUsername(value)
          }}
        />
      </div>
      <div className='input2'>
        <Input
          placeholder='请输入密码'
          value={password}
          ref={passwordRef}
          onChange={(value) => {
            setPassword(value)
          }}
        />
      </div>
      <Button onClick={loginBtn} style={{ '--border-radius': '15px' }} block color='primary' size='large'>登录</Button>
      
      <div className='link1'>
        <Link to={{ pathname: '/', state: 'hello' }}>忘记密码</Link>
      </div>
      <div className='link2'>
        <Link to={{ pathname: '/register', state: 'hello' }}>点击注册</Link>
      </div>
    </div>
  )
}
