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

    <section className="last-news">
      <div className="container">
        <header data-aos="fade-right" data-aos-duration="1000" className="header-section">
          <h2>Notícias mais recentes</h2>
          <p>Veja nossas notícias mais recentes</p>
        </header>

        <div data-aos="fade-up" data-aos-duration="1000" className="cards">
          <div className="card">
            <img src="../../../public/img/img-12.jpg" alt="Image 08" />
            <span>Animes</span>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in.</h3>
          </div>
          
          <div className="card">
            <img src="../../../public/img/img-13.jpg" alt="Image 08" />
            <span>Games</span>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in.</h3>
          </div>
          
          <div className="card">
            <img src="../../../public/img/img-14.jpg" alt="Image 08" />
            <span>Series</span>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in.</h3>
          </div>

          <div className="card">
            <img src="../../../public/img/img-15.jpg" alt="Image 08" />
            <span>Filmes</span>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in.</h3>
          </div>
          
          <div className="card">
            <img src="../../../public/img/img-16.jpg" alt="Image 08" />
            <span>Animes</span>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in.</h3>
          </div>
          
          <div className="card">
            <img src="../../../public/img/img-17.jpg" alt="Image 08" />
            <span>Games</span>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in.</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Index