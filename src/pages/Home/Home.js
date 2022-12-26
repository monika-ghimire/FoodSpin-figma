import React from 'react'
import './Home.css'
import Logo from "../../asset/logo.png";
import FoodImg from '../FoodImg';
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
    <div>
            <FoodImg/>
    </div>
    <div className='content-centex-holder'>
        <div>
            <h2 className='price'>$32</h2>
            <h2 className='food-name'>
            Green Goddess
            <br/> Chicken Salad
            </h2>
             <p>It is a non vegetarian salad which consists of the 
                <br/>green goddess dressing mixed with chicken
                <br/>, peppers, olives and celery. </p>

                <button className='order-button'>ORDER NOW</button>


                <p className='Watch-Video'>Watch the Video</p>
        </div>

    </div>
 
  </div>
  </>
  )
}
