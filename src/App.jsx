import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import './main.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Peaceadvantage from './Pages/Peaceadvantage'
import Gallary from './Pages/Gallary'
import Carreers from './Pages/Carreers'
import About from './Pages/About'


function App() {


  return (

      <div id='air'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/peace-advantage" element={<Peaceadvantage />} />
          <Route path="/gallary" element={<Gallary />} />
          <Route path="/career" element={<Carreers />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>



  )
}

export default App
