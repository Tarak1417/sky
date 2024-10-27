import React from 'react'
import bird from "../../Assets/birdimage.png"
import "./Vision.css"

const Vision = () => {
  return (
    <div className="container">
   <div>
      <h1 className="nmae">SkyServe's vision</h1>
      </div>

     

      
      <img src={bird} alt="SkyServe Logo" className="logo" />
      <p className="text">
        Pioneering a transformative approach to satellite imagery insights. Rather than a traditional
        real-time Insights-as-a-Service (IaaS) model, <strong>SkyServe SURGE</strong> is a self-serve
        platform that empowers governments, businesses, and users to access the power of Earth
        observation on their own terms.
      </p>
      <p className="text">
        The vision is to democratize access to geospatial data, enabling users to extract valuable
        insights from satellite imagery at an affordable cost. By lowering barriers to entry, our
        aim is to make Earth observation ubiquitous, fostering widespread utilization and empowering
        diverse stakeholders to make informed decisions.
      </p>
    </div>
  )
}

export default Vision
