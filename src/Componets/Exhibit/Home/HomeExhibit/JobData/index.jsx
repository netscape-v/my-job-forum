import React from 'react'
import ReactECharts from 'echarts-for-react'

import './index.css'
export default function JobData() {

  // 此处需要生命周期钩子 来后台获取 图形数据

  // 折线图 假数据
  const option = {
    title: {
      text: '工资水平'
    },
    grid: { top: 50, right: 10, bottom: 90, left: 50 },
    legend: {
      data: ['薪资'],
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      data: ['调机', '编程', '工艺', '开机', '摸鱼', '学徒']
    },
    yAxis: {
      min: 2000,
      max: 12000,
      interval: 2500
    },
    series: [{
      name: '薪资',
      type: 'bar',
      smooth: true,
      data: [6000, 8500, 10000, 8000, 12000, 3500]
    }
    ]
  }

  // 饼图 假数据  真数据要从后台去拿
  const option1 = {
    title: {
      text: '编程软件',
      subtext: '使用量',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      // formatter: "{a} <br/>{b} : {c} ({d}%)"
      formatter: "{d}%"
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['UG', 'Mastercam', 'Powermill', 'Cimtorn', 'Mill 9.1']
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '45%',
        center: ['50%', '46%'],
        data: [
          { value: 600, name: 'UG' },
          { value: 300, name: 'Mastercam' },
          { value: 310, name: 'Powermill' },
          { value: 120, name: 'Cimtorn' },
          { value: 1600, name: 'Mill 9.1' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }

  return (
    <div className='lineAndPie'>
      <div className='line'>
        <ReactECharts
          option={option}
        />
      </div>

      <div className='pie'>
        <ReactECharts
          option={option1} />
      </div>
    </div>
  )
}
