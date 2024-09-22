import "./Footer.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <footer id='footer'>
      <p>Contate-nos </p>
      <a href='#' className='wpp-icon'>
        <WhatsAppIcon />
      </a>
      <a href='#' className='insta-icon'>
        <InstagramIcon />
      </a>
    </footer>
  );
};

export default Footer;
