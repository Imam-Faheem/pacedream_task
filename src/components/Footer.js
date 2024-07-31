import React from 'react'

const Footer = () => {
  return (

      <footer  className="footer-contact">
         <div>
            <div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde odio sapiente illo qui deserunt quod eligendi su</p>
              <div className="footer-social-icons">
                <a href="#" className="social-icon instagram"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-icon facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-icon twitter"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-icon youtube"><i className="fab fa-youtube"></i></a>
              </div>
                <p className="footer-bottom">© 2024 PaceDream. All Rights Reserved.</p>
           </div>
         </div>
         <div>
          <div>
          <h2>Contact</h2>
            <p>8521 Leesburg Pike, Vienna, VA 22182</p>
            <p>Virginia, USA</p>
            <p>info@pacedream.com</p>
            <p>703-869-2029</p>
          </div>
        </div>
      </footer>

  )
}

export default Footer