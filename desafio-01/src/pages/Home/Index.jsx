import Card from './Card/Index';
import Header from '../Header/Index';
import Footer from "../Footer/Index";
import api from '../../services/api';

import { useState, useEffect } from 'react';

function Home(){
  const [mostseen, setMostseen] = useState([]);

  useEffect(() => {
    
    api.get('/posts?_limit=3')
    .then((response) => {
      setMostseen(response.data);
    });

  }, []);

  return(
    <>
      <Header />

      <div className="container">
        {
          mostseen.map((item) => {
            return <Card key={item.id} content={item}/>
          })
        }
      </div>

      <Footer />
    </>
  );
}

export default Home;