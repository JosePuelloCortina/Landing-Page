import Navbar from "../components/navbar/Navbar";
import CardService from "../components/servicios/CardService";
import Videoexample from "../components/video-example/Videoexample";


export default function LandingPage() {
  return (
    <>
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="bg-white">
          <Navbar/>
          <Videoexample/>
          <CardService/>
        </div>
      </div>
    </div>         
  </>
  )
}
