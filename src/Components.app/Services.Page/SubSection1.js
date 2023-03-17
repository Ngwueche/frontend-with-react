import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer'

export default function SubSection1() {
  return (
    <div className='section1-container'>
        <div className='letsTalk-container'>
        <Link to="/contact"><button className='letsTalk'> Let's Talk </button></Link>

        </div>
        <div className='section1-txt'>
          <p className='span-1'>Build Your High Quality Steel Project </p>
          <p className='span-2'>With Qualified Engineers From </p>
          <p className='span-3'>Mech-Weld<span className='span-4'>.</span></p>
        </div>
        <div className='span-5-container'>
          <p className='span-5'>We are engineering service company based in Nigeria and dedicated to offering excellent mechanical engineering, fabrication and welding services to companies around the world. We also offer consultation  and professional advisory assistance to start-ups.</p><hr className='span-6'></hr>
        </div>
        <div className='column'>
          <div className='col'>
            <p className='item-1'>1.2M+</p>
            <p className='item-2'>Projects Has Been Delivered</p>
          </div>
          <div className='col'>
            <p className='item-1'>2.4M+</p>
            <p className='item-2'>Components and Parts Supplied</p>
          </div>
          <div className='col'>
            <p className='item-1'>1,200+</p>
            <p className='item-2'>Emergencies and Downtime Rescued</p>
          </div>
        </div>
        <div className='whyUs'>
          <div className='whyUsHeader'>
            <p className='whyUsText'>Why You Should Use Our Services?</p>
          </div>
          <div className='whyUsImgContainer'>
            <img className='whyUsImg' src= {require("../../assets/img/site_images/welding1.png")}/>
          <p className='overlayImg' alt=''></p>
          </div>
          <div className='column'>
          <div className='col'>
            <p className='item-3'>Dedicated to Finish Your Project</p>
            <p className='item-4'> We're here to finish your project. Just give us some brief about your design and stuff, and we'll make it happen. </p>
          </div>
          <div className='col'>
            <p className='item-3'>Timely Execution </p>
            <p className='item-4'> We understand the time value of money and work to ensure our clients' interest are executed within schedule </p>
          </div>
          <div className='col'>
            <p className='item-3'>Best Materials </p>
            <p className='item-4'> Our procurement methods are guided to ensure only high quality materials are acquired to guarantee our durability standards. </p>
          </div>
        </div>
        </div><hr className='span-6'></hr>
        <div className='previousWorks'>
          <h2 className='previousWorksheader'> Our Services </h2>
          <div className='work-card-container'>
            <div className='work-cards'>
              <div className='work-card'>
                <img className='Work-card-image' alt='' src={require("../../assets/img/site_images/pipeline welding.avif")}/>
                <h2 className='cardText1'> Pipe Welding</h2>
              </div>
              <div className='work-card'>
                <img className='Work-card-image' alt='' src={require("../../assets/img/site_images/lateMachine.jpeg")}/>
                <h2 className='cardText1'> Component Fabrication and Tooling</h2>

              </div>
              <div className='work-card'>
                <img className='Work-card-image' alt='' src={require("../../assets/img/site_images/Agric equipments.jpg")}/>
                <h2 className='cardText1'>Machine Construction</h2>

              </div>
              <div className='work-card'>
                <img className='Work-card-image' alt='' src={require("../../assets/img/site_images/facility installation.jpeg")}/>
                <h2 className='cardText1'>Facility Installation</h2>

              </div>

              {/* <div className='work-card'>
                <img className='Work-card-image' alt='' src={require("../../assets/img/site_images/tractor part.jpg")}/>
                <h2 className='cardText1'> Tractor Parts Fabrication</h2>

              </div> */}
              <div className='work-card'>
                <img className='Work-card-image' alt='' src={require("../../assets/img/site_images/metal treatment.png")}/>
                <h2 className='cardText1'> Metal Treatment </h2>
              </div>
              <div className='work-card'>
                <img className='Work-card-image' alt='' src={require("../../assets/img/site_images/heavyduty machines.avif")}/>
                <h2 className='cardText1'> Heavy Duty Machine Hire and Repairs</h2>
              </div>

            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}
