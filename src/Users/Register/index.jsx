import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AutoCenter, NavBar, Button, Input, Space } from 'antd-mobile'
import '../Register/index.css'

export default () => {
  const navigate = useNavigate()
  // 返回跳转
  const back = () => {
    console.log('返回登录')
    navigate('/login')
  }

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [suggest, setSuggest] = useState('')
  // 注册动作
  const submit = () => {
    console.log('注册成功', username, password, suggest)

  }
  return (
    <>
      <NavBar onBack={back}>登录页面</NavBar>
      <div className='register'>
        <AutoCenter className='btnRegister1'>
          <Space style={{ '--gap': '24px' }} direction='vertical'>
            <Input
              placeholder='请输入用户名'
              value={username}
              onChange={val => {
                setUsername(val)
              }}
            />
            <Input
              placeholder='请输入密码'
              value={password}
              onChange={val => {
                setPassword(val)
              }}
            />
            <Input
              placeholder='请输推荐码'
              value={suggest}
              onChange={val => {
                setSuggest(val)
              }}
            />
          </Space>
        </AutoCenter>
        <div className='btnRegister2'>
          <Button onClick={submit} block color='success' size='large'>
            注&nbsp;&nbsp;&nbsp;册
          </Button>
        </div>
      </div>
    </>
  )
}
