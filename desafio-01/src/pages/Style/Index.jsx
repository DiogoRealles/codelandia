import Header from '../Header/Index';
import Footer from '../Footer/Index';
import { BsSearch, BsHeartFill, BsHeart, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
function Style() {
  return (
    <>
      <Header />

      <div className="container">

        <div className="box">
        <header>
          <h1>Style Guide</h1>
          <p>Página com elementos, componentes e estilo do projeto.</p>
        </header>
          <h3>Colors</h3>
          <div className="flex">
            <div className="card-color">
              <div className="color primary">
                <div className="token">
                  <p>#ef6331</p>
                  <p>$primary</p>
                </div>
              </div>
            </div>
            
            <div className="card-color">
              <div className="color secondary">
                <div className="token">
                  <p>#d20a6d</p>
                  <p>$secondary</p>
                </div>
              </div>
            </div>
            
            <div className="card-color">
              <div className="color grey-normal">
                <div className="token">
                  <p>#999999</p>
                  <p>$grey-normal</p>
                </div>
              </div>
            </div>
            
            <div className="card-color">
              <div className="color grey-dark">
                <div className="token">
                  <p>#313131</p>
                  <p>$grey-dark</p>
                </div>
              </div>
            </div>
            
            <div className="card-color">
              <div className="color white">
                <div className="token">
                  <p>#ffffff</p>
                  <p>$white</p>
                </div>
              </div>
            </div>
            
            <div className="card-color">
              <div className="color linear">
                <div className="token">
                  <p>#ef6331 - #d20a6d</p>
                  <p>$linear</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="box">
          <h3>Types</h3>
          <div className="box-type">
            <h1>Heading 1</h1>
            <p>font-size: 40px / line-height: 100% / font-weight: 700 </p>
          </div>
          
          <div className="box-type">
            <h2>Heading 2</h2>
            <p>font-size: 32px / line-height: 110% / font-weight: 700 </p>
          </div>
          
          <div className="box-type">
            <h3>Heading 3</h3>
            <p>font-size: 18px / line-height: 120% / font-weight: 600 </p>
          </div>
          
          <div className="box-type">
            <p>Body normal</p>
            <p>font-size: 16px / line-height: 150% / font-weight: 500 </p>
          </div>
        </div>

        <div className="box">
          <h3>Buttons</h3>
          <div className="flex">
            <button className='btn-primary'>Call to action</button>
          </div>
        </div>

        <div className="box">
          <h3>Icons</h3>
          <div className="flex icons">
            <button><BsSearch /></button>
            <button><BsHeartFill /></button>
            <button><BsHeart /></button>
            <button><BsFacebook /></button>
            <button><BsTwitter /></button>
            <button><BsLinkedin /></button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Style;
