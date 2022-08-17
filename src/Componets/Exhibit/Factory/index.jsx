import Top from './Top'
import ListAndDetils from './ListAndDetils'
import './index.css'
export default function Factory() {
  return (
    <div className='factory'>
      {/* top区 */}
      <Top />
      {/* 列表和详情 */}
      <ListAndDetils />
    </div>
  )
}
