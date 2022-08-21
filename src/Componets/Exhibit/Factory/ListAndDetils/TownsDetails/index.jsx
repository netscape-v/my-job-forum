import React, { useEffect, useState } from 'react'
import PubSub from 'pubsub-js'
import { Card, Space, AutoCenter } from 'antd-mobile'

// 这是一堆假数据，真数据要从后台获取
import towns from '../../Data/towns'

import './index.css'
export default function TownsDetails() {
  const [realKey, setRealKey] = useState('')
  // 获取item的key
  // 第一个生命周期钩子
  useEffect(
    () => {
      PubSub.subscribe('listToDetils', (_, data) => {
        setRealKey(data.key)
      })
    }
    , [])

  // 第二个生命周期钩子
  useEffect(
    () => {
      // 执行锚点
      scrollToAnchor()
      // 在这里发axios请求,根据key值获取详情
      // console.log('这里发axios请求')
    }, [realKey])

  // 设置锚点函数
  const scrollToAnchor = () => {
    // H5 锚点，锚点在overflow 的管控区才会有效
    document.getElementById('townsDetailsId').scrollTo({ top: -100, behavior: 'smooth' })
    // document.getElementById('townsDetailsId').scrollIntoView()
  }

  return (
    <div className='townsDetails'>
      <div id='townsDetailsId' className='townsDetails-2'>
        <AutoCenter>
          <Space style={{ '--gap': '8px' }} block direction='vertical'>
            {
              towns.map((item) => {
                return (
                  <Card
                    title={<div>工厂名称，在此处</div>}
                    key={item.key}
                  >
                    <div className='cardDiv'>
                      {item.title}
                    </div>
                  </Card>
                )
              })
            }
          </Space>
        </AutoCenter>


        {/* <h3 id='townsDetailsId'>
          TownsDetails+{realKey},
          气候科学家之前就发出了警告，随着全球变暖，热浪会出现得更加频繁，气温也将更高。但根据上个月发表的一项研究[1]，这个未来比研究人员担心的更早来临了，尤其是在西欧这个热浪“高发区”。这些屡屡刷新纪录的热浪不仅一浪高过一浪，甚至完全超出了气候模型的预测。气候科学家之前就发出了警告，随着全球变暖，热浪会出现得更加频繁，气温也将更高。但根据上个月发表的一项研究[1]，这个未来比研究人员担心的更早来临了，尤其是在西欧这个热浪“高发区”。这些屡屡刷新纪录的热浪不仅一浪高过一浪，甚至完全超出了气候模型的预测。气候科学家之前就发出了警告，随着全球变暖，热浪会出现得更加频繁，气温也将更高。但根据上个月发表的一项研究[1]，这个未来比研究人员担心的更早来临了，尤其是在西欧这个热浪“高发区”。这些屡屡刷新纪录的热浪不仅一浪高过一浪，甚至完全超出了气候模型的预测。气候科学家之前就发出了警告，随着全球变暖，热浪会出现得更加频繁，气温也将更高。但根据上个月发表的一项研究[1]，这个未来比研究人员担心的更早来临了，尤其是在西欧这个热浪“高发区”。这些屡屡刷新纪录的热浪不仅一浪高过一浪，甚至完全超出了气候模型的预测。气候科学家之前就发出了警告，随着全球变暖，热浪会出现得更加频繁，气温也将更高。但根据上个月发表的一项研究[1]，这个未来比研究人员担心的更早来临了，尤其是在西欧这个热浪“高发区”。这些屡屡刷新纪录的热浪不仅一浪高过一浪，甚至完全超出了气候模型的预测。气候科学家之前就发出了警告，随着全球变暖，热浪会出现得更加频繁，气温也将更高。但根据上个月发表的一项研究[1]，这个未来比研究人员担心的更早来临了，尤其是在西欧这个热浪“高发区”。这些屡屡刷新纪录的热浪不仅一浪高过一浪，甚至完全超出了气候模型的预测。气候科学家之前就发出了警告，随着全球变暖，热浪会出现得更加频繁，气温也将更高。但根据上个月发表的一项研究[1]，这个未来比研究人员担心的更早来临了，尤其是在西欧这个热浪“高发区”。这些屡屡刷新纪录的热浪不仅一浪高过一浪，甚至完全超出了气候模型的预测。气候科学家之前就发出了警告，随着全球变暖，热浪会出现得更加频繁，气温也将更高。但根据上个月发表的一项研究[1]，这个未来比研究人员担心的更早来临了，尤其是在西欧这个热浪“高发区”。这些屡屡刷新纪录的热浪不仅一浪高过一浪，甚至完全超出了气候模型的预测。
          TownsDetails+{realKey},
        </h3> */}

      </div>
    </div>
  )
}
