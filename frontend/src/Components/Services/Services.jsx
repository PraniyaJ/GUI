import React from 'react';



function Services() {
  return (
    <div className="our-service">
        <div className="service-heading">
            <h2>Our Services</h2>
        </div>

        <div className="main-services">
            <div className="inner-services">
                <div className="service-icon">
                    <i className="fa-solid fa-truck-medical"></i>
                </div>
                <h3>Ambulance Service</h3>
                <p>Swift and reliable ambulance service at your service. Count on us for quick and professional medical transportation to ensure your well-being.</p>
            </div>

            <div className="inner-services">
                <div className="service-icon">
                    <i className="fa-solid fa-hospital"></i>
                </div>
                <h3>Emergency Care</h3>
                <p>Immediate medical attention when you need it most. Our Emergency Care Hub is here for your emergencies, ensuring swift and comprehensive treatment</p>
            </div>
            <div className="inner-services">
                <div className="service-icon">
                    <i className="fa-solid fa-x-ray"></i>
                </div>
                <h3>Radiology & Imaging</h3>
                <p>Experience top-tier Radiology Services with advanced imaging and expert radiologists. We provide precise visuals to support informed medical decisions about your health.</p>
            </div>

            <div className="inner-services">
                <div className="service-icon">
                    <i className="fa-solid fa-pills"></i>
                </div>
                <h3>Pharmacy Services 24x7</h3>
                <p>Our Pharmacy Services offer convenient access to prescribed medications and healthcare products, ensuring quality pharmaceutical care with qualified pharmacists dedicated to patient safety.</p>
            </div>

            <div className="inner-services">
                <div className="service-icon">
                    <i className="fa-solid fa-list-check"></i>
                </div>
                <h3>Laboratory Services</h3>
                <p>Our Laboratory Services offer advanced diagnostic testing to aid accurate medical evaluations and treatment decisions. We provide reliable and timely laboratory results to support your healthcare needs.</p>
            </div>

            <div className="inner-services">
                <div className="service-icon">
                    <i className="fa-solid fa-user-doctor"></i>
                </div>
                <h3>Dialysis Services</h3>
                <p>Provide specialized care for kidney-related conditions, delivering treatments to support kidney function. With trained professionals and advanced technology, we ensure efficient and comfortable dialysis sessions.</p>
            </div>
        </div>
    </div>




  )
}

export default Services;
