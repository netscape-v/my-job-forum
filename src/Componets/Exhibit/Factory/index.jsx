import Top from './Top'
import TownsAndFactory from './TownsAndFactory'
import './index.css'
export default function Factory() {
  return (
    <div className='factory'>
      {/* top区 */}
      <Top />
      {/* 列表和详情 */}
      <TownsAndFactory />
    </div>
  )
}
