import { Link } from 'react-router-dom';

function NotFound(){
  return(
    <>
      <div className="notfound">
        <div className='container'>
          <h1>Naped</h1>

          <img src="../../../public/img/img-404.svg" alt="Image 404" />
          <h5>Tenho más notícias para você!</h5>
          <p>A página que você está procurando pode ter sido removida ou está temporariamente indisponível.</p>
          
          <Link className="button button-primary" to="/">Back to home</Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;