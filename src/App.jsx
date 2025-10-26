
import './App.css'
import Navbar from './components/Navbar'
import Caraousel from './components/Caraousel'
import SimpleSlider from './components/SimpleSlider'
import Services from './components/Services'
import Cards from './components/Cards'
import {createBrowserRouter , Link, RouterProvider} from 'react-router'
import Experiment from './components/Experiment'
import MeetHeading from './components/MeetHeading'
import MeetOurTeam from './components/MeetOurTeam'
import Footer from './components/Footer'
import Maps from './components/Maps'
import FindUs from './components/FindUs'
import ContactUs from './components/ContactUs'
import Products from './components/Products'
import ComingSoon from './components/ComingSoon'
import WhatWeDoH from './components/WhatWeDoH'
import AboutUs from './components/AboutUs'

function App() {
   const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Caraousel />
        <Services />
        <Cards />
        <MeetHeading />
        <MeetOurTeam />
        <WhatWeDoH />
        <FindUs />
        <Maps />
        <Footer />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Navbar />
        <ContactUs />
        <Footer />
      </>
    ),
  },
  {
    path:"/products",
    element:(
      <>
      <Navbar />
      <Products />
      <Footer />
      </>
    )
  },
  {
    path:"/about",
    element:(
      <>
      <Navbar />
      <AboutUs/>
      <Footer />
      </>
    )
  },
  {
    path:"/:id",
    element:(
      <>
      <ComingSoon />
      </>
    )
  }
  // Add more routes as needed
])
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
