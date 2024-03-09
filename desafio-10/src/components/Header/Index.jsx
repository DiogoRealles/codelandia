import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';

const Index = () => {

  useEffect(() => {
    AOS.init({
      once: true,
    })
  }, []);

  return (
    <header className='header'>
      <div className="container">
        <nav>
          <Link data-aos="fade-down" data-aos-duration="1000" to="./" className='logo'>Naped</Link>

          <ul data-aos="fade-down" data-aos-duration="1300" className="menu-desktop">
            <li><Link to="./">Home</Link></li>
            <li><Link to="./series">Series</Link></li>
            <li><Link to="./movies">Filmes</Link></li>
            <li><Link to="./animes">Animes</Link></li>
            <li><Link to="./games">Games</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Index