import react from "react";
import { FaRegCopyright } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaTiktok } from "react-icons/fa6";
import "./footer.css";
import "./../../App.css";

function Footer() {
  const date = new Date().getFullYear();

  return (
    <div className="footer">
    <footer>
        <h3>Diallo Store</h3>
        <div className="link">
          <h5>Remerciment</h5>
          <ul className="link-img">
            <li>Ousmane Diallo</li>
            <li>Soumaya Diop</li>
            <li>Ouseynou Faye</li>
            <li>Abdou Mbaye</li>
            <li>Abou Diallo</li>
          </ul>
        </div>

        <div className="link">
          <h5>Fournisseur</h5>
          <ul className="link-img">
            <li>Magasin Ba</li>
            <li>Boutique Khelcom</li>
            <li>Magasin Khadim Boissons</li>
            <li>Riz du Sangomar</li>
            <li>Senico</li>
          </ul>
        </div>

        <div className="social-net">
          <h5>Social network</h5>
          <ul className="social-net-links">
            <li><a href="https://twitter.com/Fall50Diallo" target="_blank"><FaXTwitter /> Twitter</a></li>
            <li><a href="https://www.instagram.com/diallo_1.3/" target="_blank"><FaInstagram /> Instagram</a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100081082383049" target="_blank"><FaFacebookF /> Facebook</a></li>
            <li><a href="https://mail.google.com/mail/u/0/#inbox" target="_blank"><BiLogoGmail /> Gmail</a></li>
            <li><a href="https://www.tiktok.com/channel/UC69gQ5dZ0v83Z82lZ_Z0-zA" target="_blank"> <FaTiktok />Tiktok</a></li>
          </ul>
        </div>

      </footer>
      <p className="copy"><FaRegCopyright />Copyright{date}</p>
    </div>  
  );
}

export default Footer;