import React from 'react';
import aboutus from '../../assets/about us.png'


function About() {
  return (
    <div className="main-about">

        <div className="about-heading">About Us</div>

        <div className="inner-main-about">
            <div className="about-inner-content-left">
                <img src={aboutus} />
            </div>

            <div className="about-inner-content">
                <div className="about-right-content">
                    <h2>Why Patients Choose Us</h2>
                    <p>Helse Hospitals employs, consults, and partners with the most dedicated, skilled, and experienced healthcare professionals 
                        to offer some of the country’s most advanced, evidence based clinical programmes for treating complex diseases, through our Centres of Excellence. 
                        We have a sound record for offering outstanding outcomes..</p>
                    <p className="aboutsec-content">
                        Helse Hospitals have international accreditation, 
                        and also offers treatment for increasingly common lifestyle-based diseases, 
                        preventive healthcare, and the most complete menu of diagnostic tests.                        
                        </p>
                        <button className="aboutbtn">Read More</button>
                </div>
            </div>
        </div>
    </div>




  )
}

export default About;
