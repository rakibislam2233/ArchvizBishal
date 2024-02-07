import About from "@/components/About"
import Banner from "@/components/Banner"
import Blog from "@/components/Blog"
import Contact from "@/components/Contact"
import Protfolio from "@/components/Protfolio"
import Service from "@/components/Service"
import Skills from "@/components/Skills"
const Home = () => {
  return (
    <div>
      <Banner/>
      <About/>
      <Service/>
      <Skills/>
      <Protfolio/>
      <Blog/>
      <Contact/>
    </div>
  )
}

export default Home
