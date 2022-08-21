export default {
  message: [
    { id: '01', message: '今天吃蛋糕' },
    { id: '02', message: '明天吃牛排' },
    { id: '03', message: '后天吃冰激凌' },
  ],
  leftActions: [
    {
      key: 'pin',
      text: '置顶',
      color: 'primary',
    },
  ],
  rightActions: [
    {
      key: 'unsubscribe',
      text: '取消关注',
      color: 'light',
    },
    {
      key: 'mute',
      text: '免打扰',
      color: 'warning',
    },
    {
      key: 'delete',
      text: '删除',
      color: 'danger',
    },
  ]
}
