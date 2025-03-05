import React from 'react';
import doc1 from '../../assets/doc1.png';



function Home () {
  return (
    <div className="main-home">
      <div className="home">
        <div className="home-left-content">
          <span>Welcome to Helse Hospital</span>
          <h2>We are Offering the<br />Most Advanced Clinical Treatments</h2>
          <p>
          We offer a range of spacious modern rooms and are equipped with state of critical care units. 
                    At Helse Hospitals the best consultants, specialists and employees are dedicated to providing 
                    exceptional clinical outcomes and the utmost customer satisfaction.
          </p>
          <div className="home-btn">
            <a href="#">Read More</a>
          </div>
        </div>
        <div className="home-right-content">
          <img src={doc1} />
        </div>
      </div>
    </div>
  )
}

export default Home;
