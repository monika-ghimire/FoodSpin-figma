import React from 'react'
import './Nav.css'
import Logo from "../../asset/logo.png";
export default function Home() {
  return (
  <>
  <div className='home-content-wrapper'>
    {/* navbar */}
    <section>
        <div className="nav-bar-wrapper">
          <div className="nav-bar-content-holder">
            <ul>
              <li>
                <img src={Logo} />
              </li>
              <li className="nav-group">
               
                  <ul>
                    <li>Break fast</li>
                    <li>Lunch</li>
                    <li>Dinner</li>
                  </ul>
        
              </li>
              <li className="privacy">
                <ul>
                <li>Icon</li>
                </ul>
              </li>

              
            </ul>
          </div>
        </div>
      </section>
  
    
    
  </div>
  </>
  )
}
