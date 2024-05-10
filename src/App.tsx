import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Navbar from './components/navbar/Navbar'
import Videoexample from './components/video-example/Videoexample'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <> 
              <Navbar/>
              <Videoexample/>
              <LandingPage/> 
            </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
