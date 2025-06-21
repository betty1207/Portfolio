import Hero from '../components/Home/Hero'
import HomeProjects from '../components/Home/Projects'
import Stack from '../components/Home/Stack'
import Contact from '../Reusable/Contact'

function Home() {
  return (
    <div className=''>
        <Hero/>
        <HomeProjects/>
        <Stack/>
        <Contact/>
    </div>
  )
}

export default Home