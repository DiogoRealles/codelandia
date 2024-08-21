import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from './pages/About/Index';
import NotFound from './pages/NotFound/Index';
import Home from './pages/Home/Index';
import Post from './pages/Post/Index';
import Search from './pages/Search/Index';
import Style from './pages/Style/Index';

function Paths(){
  return(
    <>    
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/style" element={<Style />}/>

            <Route path="/post/:idPost" element={<Post />}/>
            
            <Route path="/search/:word_search" element={<Search />}/>
            
            <Route path="*" element={<NotFound />}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default Paths;