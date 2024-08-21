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
    <section className="news">
      <div className="container">
        <div className="more-views">
          <div data-aos="fade-up" data-aos-duration="1000" className="card">
            <div className="image">
              <img src="../../../public/img/img-04.jpg" alt="Image 04" />
              <span className="tag">Anime</span>
            </div>
            <div className="text">
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...</p>
              <span className="posted-on"><time dateTime="2022-08-16T00:00:00"></time>01/01/2023</span>
              <a href="#" className="button button-primary">Ler notícia</a>
            </div>
          </div>
          
          <div data-aos="fade-up" data-aos-duration="1000" className="card">
            <div className="image">
              <img src="../../../public/img/img-05.jpg" alt="Image 05" />
              <span className="tag">Anime</span>
            </div>
            <div className="text">
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...</p>
              <span className="posted-on"><time dateTime="2022-08-16T00:00:00"></time>01/01/2023</span>
              <a href="#" className="button button-primary">Ler notícia</a>
            </div>
          </div>
          
          <div data-aos="fade-up" data-aos-duration="1000" className="card">
            <div className="image">
              <img src="../../../public/img/img-06.jpg" alt="Image 04" />
              <span className="tag">Anime</span>
            </div>
            <div className="text">
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...</p>
              <span className="posted-on"><time dateTime="2022-08-16T00:00:00"></time>01/01/2023</span>
              <a href="#" className="button button-primary">Ler notícia</a>
            </div>
          </div>
          
          <div data-aos="fade-up" data-aos-duration="1000" className="card">
            <div className="image">
              <img src="../../../public/img/img-07.jpg" alt="Image 04" />
              <span className="tag">Anime</span>
            </div>
            <div className="text">
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...</p>
              <span className="posted-on"><time dateTime="2022-08-16T00:00:00"></time>01/01/2023</span>
              <a href="#" className="button button-primary">Ler notícia</a>
            </div>
          </div>
          
          <div data-aos="fade-up" data-aos-duration="1000" className="card">
            <div className="image">
              <img src="../../../public/img/img-08.jpg" alt="Image 04" />
              <span className="tag">Anime</span>
            </div>
            <div className="text">
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...</p>
              <span className="posted-on"><time dateTime="2022-08-16T00:00:00"></time>01/01/2023</span>
              <a href="#" className="button button-primary">Ler notícia</a>
            </div>
          </div>
        </div>

        <div className="top-news">
          <header data-aos="fade-right" data-aos-duration="1000" className="header-section">
            <h2>Últimas notícias</h2>
            <p>Veja nossas últimas notícias</p>
          </header>

          <div className="cards">
            <div data-aos="fade-up" data-aos-duration="1000" className="card">
              <img src="../../../public/img/img-09.jpg" alt="Image 08" />
              <span>Animes</span>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in.</h3>
            </div>

            <div data-aos="fade-up" data-aos-duration="1000" className="card">
              <img src="../../../public/img/img-10.jpg" alt="Image 08" />
              <span>Filmes</span>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in.</h3>
            </div>

            <div data-aos="fade-up" data-aos-duration="1000" className="card">
              <img src="../../../public/img/img-11.jpg" alt="Image 08" />
              <span>Games</span>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in.</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Index