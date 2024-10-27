import React from 'react'
import bird  from "../../Assets/birdimage.png"
import "./Home.css"
import About from '../About/About'
import Linkedinpage from '../Linkedinpage/Linkedinpage'
import Obseravtion from '../Obseravtion/Obseravtion'
import Opportunities from '../Opportunities/Opportunities'
import Vision from '../Vision/Vision'
import Snaps from '../Snaps/Snaps'
import Missions from '../Mission/Mission'
import AwardsRecognition from '../Awards/Awards'
import ConnectWithUs from '../Contact/Contact'

const Home = () => {
  return (
    <div>
    <div className='Container'>
          <img src={bird} alt="bird" />
          <h1>Discovering highspace Technologies pvt Ltd</h1>
          <h1>Your Prelude to skyserver</h1>
          <h1 className='Earth'>Insights From Spaces For Earth </h1>
    </div>
    <div className='ABOUTCONTAINER'>
    <About/>
    </div>
    <div className='ABOUTCONTAINER'>
    <Linkedinpage/>
    </div>
    <div className='ABOUTCONTAINER'>
    <Obseravtion/>
    </div>
    <div className='ABOUTCONTAINER'>
  <Opportunities/>
    </div>
    <div className='ABOUTCONTAINER'>
      <Vision/>
    </div>
    <div className='ABOUTCONTAINER'>
      <Snaps/>
    </div>
    <div className='ABOUTCONTAINER'>
      <Missions/>
    </div>
    <div className='ABOUTCONTAINER'>
     <AwardsRecognition/>
    </div>
    <div className='ABOUTCONTAINER'>
    <ConnectWithUs/>
    </div>
    
    
    

    
    </div>
  )
}

export default Home
