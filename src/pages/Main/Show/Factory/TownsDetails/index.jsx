import React, { useEffect } from 'react'
import Scroll from 'react-scroll'

import './index.css'
export default function TownsDetails(props) {

  const data = props.showData
  useEffect(
    () => {
      // 在这里发axios请求,根据key值获取详情
      console.log('在这里发axios请求')
      // 执行锚点
      console.log('在这里触发锚点')
      scrollToAnchor()
    }
    , [data])

  // 必须用 react-scroll 的标签 Element 才可以跳转锚点
  const Element = Scroll.Element;
  // 创建跳转对象
  const scroller = Scroll.scroller
  // 设置锚点函数
  const scrollToAnchor = () => {
    scroller.scrollTo('elementText', {
      // 滚动的时间
      duration: 2000,
      // 滚动延时, 多少毫秒后开始滚动
      delay: 50,
      // 启用滚动
      smooth: true,
      // 正数向下，负数向上
      offset: -1000
    })
  }


  return (
    <div className='townsDetails'>
      <Element className='townsDetails-2' name='elementText'>
        {/* 详细内容展示区 */}
        <h3>
          TownsDetails+{data},
          气候科学家之前就发出了警告，随着全球变暖，热浪会出现得更加频繁，气温也将更高。但根据上个月发表的一项研究[1]，这个未来比研究人员担心的更早来临了，尤其是在西欧这个热浪“高发区”。这些屡屡刷新纪录的热浪不仅一浪高过一浪，甚至完全超出了气候模型的预测。气候科学家之前就发出了警告，随着全球变暖，热浪会出现得更加频繁，气温也将更高。但根据上个月发表的一项研究[1]，这个未来比研究人员担心的更早来临了，尤其是在西欧这个热浪“高发区”。这些屡屡刷新纪录的热浪不仅一浪高过一浪，甚至完全超出了气候模型的预测。气候科学家之前就发出了警告，随着全球变暖，热浪会出现得更加频繁，气温也将更高。但根据上个月发表的一项研究[1]，这个未来比研究人员担心的更早来临了，尤其是在西欧这个热浪“高发区”。这些屡屡刷新纪录的热浪不仅一浪高过一浪，甚至完全超出了气候模型的预测。气候科学家之前就发出了警告，随着全球变暖，热浪会出现得更加频繁，气温也将更高。但根据上个月发表的一项研究[1]，这个未来比研究人员担心的更早来临了，尤其是在西欧这个热浪“高发区”。这些屡屡刷新纪录的热浪不仅一浪高过一浪，甚至完全超出了气候模型的预测。气候科学家之前就发出了警告，随着全球变暖，热浪会出现得更加频繁，气温也将更高。但根据上个月发表的一项研究[1]，这个未来比研究人员担心的更早来临了，尤其是在西欧这个热浪“高发区”。这些屡屡刷新纪录的热浪不仅一浪高过一浪，甚至完全超出了气候模型的预测。气候科学家之前就发出了警告，随着全球变暖，热浪会出现得更加频繁，气温也将更高。但根据上个月发表的一项研究[1]，这个未来比研究人员担心的更早来临了，尤其是在西欧这个热浪“高发区”。这些屡屡刷新纪录的热浪不仅一浪高过一浪，甚至完全超出了气候模型的预测。气候科学家之前就发出了警告，随着全球变暖，热浪会出现得更加频繁，气温也将更高。但根据上个月发表的一项研究[1]，这个未来比研究人员担心的更早来临了，尤其是在西欧这个热浪“高发区”。这些屡屡刷新纪录的热浪不仅一浪高过一浪，甚至完全超出了气候模型的预测。气候科学家之前就发出了警告，随着全球变暖，热浪会出现得更加频繁，气温也将更高。但根据上个月发表的一项研究[1]，这个未来比研究人员担心的更早来临了，尤其是在西欧这个热浪“高发区”。这些屡屡刷新纪录的热浪不仅一浪高过一浪，甚至完全超出了气候模型的预测。
          TownsDetails+{data},
        </h3>
      </Element>
    </div>
  )
}
