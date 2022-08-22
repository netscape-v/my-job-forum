import TownsList from './TownsList'
import FactoryList from './FactoryList'
import './index.css'
export default function TownsAndFactory() {
  return (
    <div className='townsAndFactory'>
      <TownsList />
      <FactoryList />
    </div>
  )
}