import Hero from '@/components/Hero.jsx'
import Header from '../components/Header.jsx'
import Catergory from '@/components/Catergory.jsx'
import CarList from '@/components/CarList.jsx'
function Home() {
  return (
    <div>
        <Header/>
        <Hero/>
        <Catergory/>
        <CarList/>
    </div>
  )
}

export default Home
