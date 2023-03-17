import React from 'react';
import { Link } from 'react-router-dom';



export default function Footer() {
  return (
    <>
    <hr />
      <div className="footer-container">
      <div className="top-footer">
        <div className='foot-col'>
          <div className='col-elements'>
          <div className='footer-col'>
            <p style={{fontSize:'20px'}} className='col-elements-header'>Mech-Weld Engineering Limited</p>
            <img className='footer-logo' src= {require('../assets/img/logo/MechWeld logo.png')}/>
            <p className='footer-address'>#1 Mech Weld Lane, Opposite Nigeria Breweries, Amaeke, Ngwo, Enugu State, Nigeria.</p>
          <a typeof='telephone' >+23480 386 06 044</a>
          </div>
          <div className='footer-col'>
            <div className='col-elements-header'>
              <p style={{fontSize:'20px'}} className='col-elements-header'>Quick Links</p></div>
              <div  className='footer-link'>
                <ul className='footer-links'>
                  <Link style={{color:'blue', textDecoration:'none'} } to="/"> Home</Link>
                  <Link style={{color:'blue', textDecoration:'none'} } to="/services"> View Our services</Link>
                  <Link style={{color:'blue', textDecoration:'none'} } to="/contact"> Get in Touch</Link>
                  <Link style={{color:'blue', textDecoration:'none'} } to="/about"> About Mech-Weld </Link>
                </ul>
              </div>
            </div>
            <div className='footer-col'>
              <div style={{fontSize:'20px'}} className='col-elements-header'><p>Socials </p></div>
                <ul className='footer-links'>
                  <a target="_blank" href="https://www.linkedin.com/company/mech-weld"><i class="fab fa-linkedin"></i></a>
                  <a target="_blank" href="https://twitter.com/_mechweld"><i class="fab fa-twitter"></i></a>
                  <a target="_blank" href="https://www.youtube.com/channel/UC4b3OabTJXNi-IU_CWUWPqQ"><i class="fab fa-whatsapp"></i></a>
                </ul>
            </div>

        </div>
      </div>
      <div className='foot-container'>
        <footer className='foot'>
          <small>© 2023 Mazal-Tov Limited, Inc. All right reserved.</small>
        </footer>
      </div>
      </div>
      </div>


    </>
  );
}
