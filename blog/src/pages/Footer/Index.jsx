import { Link, useNavigate } from "react-router-dom";

function Footer(){
  return(
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <Link className="footer__logo" to="/">Codelândia</Link>
          <Link className="footer__about" to="/style">Style</Link>
        </div>
        <div className="footer__copy">
          <p>Development by: <a href="https://www.linkedin.com/in/diogorealles/" target="_blank"><strong>Diogo Realles</strong></a> - 2022</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;