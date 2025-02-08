import react from "react";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";
import "./contact.css";
import "./../../App.css";



function Contact() {
  return (
    <div id="contact">
      <h2>Contact</h2>

      <div className="container-contact">
        <div className="email">
          <MdEmail />
          <p>abdoumajid2003@gmail.com</p>
        </div>
        <div className="location">
          <FaLocationDot />
          <p>Guediawaye, SN</p>
        </div>
        <div className="number">
          <IoIosPhonePortrait />
          <p>78 604 31 79</p>
        </div>
      </div>

      <div class="form">
        <form action="mailto:" method="post">
          <div className="form-group">
            <label for="name">Prénom et Nom</label>
            <input type="text" name="name" id="name" placeholder="Enter your name" />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter your email" />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="5" placeholder="Enter your message"></textarea>
          </div>
          <button type="submit"><i class="fa-solid fa-paper-plane"></i> Envoyer Votre Message</button>
        </form>
      </div>
    </div>
  );
}


export default Contact;
