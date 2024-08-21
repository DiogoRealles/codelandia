import Header from '../Header/Index';
import Footer from "../Footer/Index";

import { Link } from 'react-router-dom';

function NotFound(){
  return(
    <>
      <Header />

      <div className="notfound">
        <div className='container'>
          <h1>blog.</h1>

          <h2>404</h2>
          <h5>Page not found!</h5>
          <p>The page are your search not exist or move. Click the return the home.</p>
          
          <Link className="btn-primary" to="/">Back to home</Link>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default NotFound;