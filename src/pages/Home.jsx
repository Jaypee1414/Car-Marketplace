import Hero from '@/components/Hero.jsx'
import Header from '../components/Header.jsx'
import Catergory from '@/components/Catergory.jsx'
import CarList from '@/components/CarList.jsx'
import Section from '@/components/Section.jsx'
import Footer from '@/components/Footer.jsx'
function Home() {
  return (
    <div>
        <Header/>
        <Hero/>
        <Catergory/>
        <CarList/>
        <Section/>
        <Footer/>
    </div>
  )
}

export default Home
