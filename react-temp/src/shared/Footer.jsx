import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
//const navigate = useNavigate();

  return (
    <footer>
      <div className="box-container">
        <div className="box">
            <h3>developer contact info</h3>
            <a href="#"> <i className="fas fa-phone"></i> +123-456-7890 </a>
            <br />
            <a href = "mailto:kit.tjclassNamees@gmail.com?subject = classNameBookstoreInquiry&body = Message"> <i className="fas fa-envelope"></i> kit.tjclasses@gmail.com </a>
        </div>
        <div className="box">
            <h3>our locations</h3>
            <a href="#"> <i className="fas fa-map-marker-alt"></i> Massachusetts</a><br />
            <a href="#"> <i className="fas fa-map-marker-alt"></i> Vermont </a><br />
            <a href="#"> <i className="fas fa-map-marker-alt"></i> California </a><br />
            <a href="#"> <i className="fas fa-map-marker-alt"></i> New Jersey </a><br />
            <a href="#"> <i className="fas fa-map-marker-alt"></i> Colorado </a><br />
            <a href="#"> <i className="fas fa-map-marker-alt"></i> Austin </a><br />
        </div>
        <div className="box">
            <h3>quick links</h3>
            <a href="#"> <i className="fas fa-arrow-right"></i> home </a><br />
            <a href="#"> <i className="fas fa-arrow-right"></i> featured (coming soon) </a><br />
            <a href="#"> <i className="fas fa-arrow-right"></i> arrivals (coming soon) </a><br />
            <a href="#"> <i className="fas fa-arrow-right"></i> reviews (coming soon) </a><br />
            <a href="#"> <i className="fas fa-arrow-right"></i> blogs (coming soon) </a><br />
        </div>
    </div>
    <hr />
    <div className="credit">Copyright &copy; Kit Fenrir Amreik (they/she), Carol's Bookstore (CodeSquad) 2025. All rights reserved.</div>
  </footer>
  
  );
};

export default Footer;