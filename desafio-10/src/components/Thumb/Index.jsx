import { Link } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';

const Index = ({content}) => {
  
  useEffect(() => {
    AOS.init({
      once: true,
    })
  }, []);

  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="thumb">
      <Link className="global-link" to={`/post/${content.id}`}></Link>
      <img src={content.imageUrl} alt="Image 01" loading="lazy" />
      <span className="tag">{content.category}</span>
      <h2 className="thumb-title">{content.title}</h2>
    </div>
  )
}

export default Index