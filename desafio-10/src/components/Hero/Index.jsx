import Thumb from '../Thumb';
import api from '../../services/api';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useState, useEffect } from 'react';

const Index = () => {
  const [mostseen, setMostseen] = useState([]);
  
  useEffect(() => {
    AOS.init({
      once: true,
    })
  }, []);

  useEffect(() => {
    
    api.get('/posts?_limit=3')
    .then((response) => {
      setMostseen(response.data);
    });

  }, []);

  return (
    <section className="hero">
      <div className="container">
        <div data-aos="fade-right" data-aos-duration="1000" className="hero-intro">
          <h1>Mundo nerd?<br />
            Naped!
          </h1>
          <p>O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados.</p>
        </div>
        <div className="hero-content">
          {
            mostseen.map((item) => {
              return <Thumb key={item.id} content={item}/>
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Index