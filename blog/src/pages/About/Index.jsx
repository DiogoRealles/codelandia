import Header from "../Header/Index";
import Footer from "../Footer/Index";
import imageBanner from '../../img/about.png';

function About(){
  return(
    <>
      <Header />

      <div data-aos="zoom-in" className="container">
        <div className="about">
          <h6 className='about__title'>Sobre o blog.</h6>
          <div className="about__banner">
            <img src={imageBanner} alt="Image banner" />
          </div>
          <div className="about__content">
            <h1 className='about__subtitle'>Somo o blog.</h1>
            <p className='about__text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi illum, eaque asperiores vel impedit sed assumenda id minima quod. Qui iure vero, esse mollitia sunt error hic alias, optio blanditiis, saepe deserunt! Deserunt saepe, cum aperiam eum esse tempora fuga. Itaque excepturi modi minima sapiente laudantium error saepe eius corrupti!</p>
            <p className='about__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptatibus laborum nam repudiandae aperiam libero in, impedit similique nostrum officiis provident deserunt? Vero provident accusantium, impedit nam dolor dignissimos et quisquam adipisci maxime eaque dolore, perferendis commodi porro. Nisi alias neque tempora eveniet doloremque atque possimus quibusdam, cumque facilis! Accusantium iste explicabo iure exercitationem eveniet, vero unde porro excepturi minima sint libero quas corporis commodi, totam recusandae maiores. Iure exercitationem vero cum iste neque, sit illo dolore esse suscipit ad magni nemo, aperiam quasi nostrum labore omnis eos error voluptatibus atque aliquam vitae corporis voluptas nesciunt! Corporis maxime sapiente doloribus.</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;