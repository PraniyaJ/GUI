import React from 'react';
import whitelogo from '../../assets/white logo.png';


function Footer (){
  return (
    <div className="main-footer">
      <div className="footer-inner">
        <div className="footer-content">
          <img src={whitelogo} />
          <p>
          With International accreditation for Patient Safety and Care, the Helse Hospital is the leading private healthcare provider in Sri Lanka. Our unwavering commitment to compassionate patient care, innovation & outstanding patient outcomes has earned us the high position of trust we enjoy.
          </p>
          <div className="credit">
            Helse Hospitals 2025 All Rights Reserved. created by{' '}
            <span>PRANEUDA.web</span>
          </div>
        </div>
        <div class="footer-content">
                <h1>Quick Links</h1>
                <div class="link">
                    <a href=""><i class="fa fa-chevron-right"></i>Home</a>
                    <a href=""><i class="fa fa-chevron-right"></i>About</a>
                    <a href=""><i class="fa fa-chevron-right"></i>Services</a>
                    <a href=""><i class="fa fa-chevron-right"></i>Gallery</a>
                    <a href=""><i class="fa fa-chevron-right"></i>Review</a>
                </div>
        </div>
        <div class="footer-content">
                <h1>Our Services</h1>
                <div class="link">
                    <a href=""><i class="fa fa-chevron-right"></i>Ambulance</a>
                    <a href=""><i class="fa fa-chevron-right"></i>Emergency Care</a>
                    <a href=""><i class="fa fa-chevron-right"></i>Radiology</a>
                    <a href=""><i class="fa fa-chevron-right"></i>Pharmacy</a>
                    <a href=""><i class="fa fa-chevron-right"></i>Laboratory</a>
                    <a href=""><i class="fa fa-chevron-right"></i>Dialysis</a>
                    
                </div>
            </div>



            <div class="footer-content">
                <h1>Contact Info</h1>
                <div class="link">
                    <a href=""><i class="fa fa-phone"></i>+94112560000</a>
                    <a href=""><i class="fa fa-phone"></i>+94112550000</a>
                    <a href=""><i class="fa fa-envelope"></i>helse@gmail.com</a>
                    <a href=""><i class="fa fa-map-marker"></i>Horton Place, Colombo 7</a>
                    
                    <div class="Hotline">
                        
                        <h2>24/7 Emergency</h2>
                        <h1>Hotline: 1313</h1>
                    </div>
                </div>
            </div>

            <div class="footer-content">
                <h1>Follow Us</h1>
                <div class="link">
                    <a href=""><i class="fa-brands fa-facebook-f"></i>Facebook</a>
                    <a href=""><i class="fa-brands fa-instagram"></i>Instagram</a>
                    <a href=""><i class="fa-brands fa-x-twitter"></i>X-Twitter</a>
                    <a href=""><i class="fa-brands fa-linkedin-in"></i>Linkedin</a>
                    <a href=""><i class="fa-brands fa-tiktok"></i>Tiktok</a>
                </div>
            </div>


        {/* Add other footer sections similarly */}
      </div>
    </div>
  )
}

export default Footer;
