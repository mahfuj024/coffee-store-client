import { Link } from "react-router"
import banner from "../assets/banner.png"
import DisplayCoffee from "./DisplayCoffee"

function Home() {
  return (
    <div>
      {/* banner */}
      <div className="relative bg-cover bg-center flex justify-around items-center h-[800px]" style={{ backgroundImage: `url(${banner})` }}>
        <div>
        </div>
        <div className="text-white max-w-[754px] h-[224px] ml-80 space-y-6">
          <h1 className="font-semibold text-4xl transition-transform duration-300 hover:-translate-y-[2px] hover:scale-[1.02]">Would you like a Cup of Delicious Coffee?</h1>
         <p className="font-light transition-transform duration-300 hover:-translate-y-[2px] hover:scale-[1.02]">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
          <Link to="/bannerdetails" className="btn  transition-all duration-300 overflow-hidden group hover:scale-105 hover:tracking-wide shadow-md hover:shadow-lg">Learn More</Link>
        </div>
      </div>
      <DisplayCoffee></DisplayCoffee>
    </div>
  )
}

export default Home