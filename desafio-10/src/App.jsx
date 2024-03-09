import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Series from './pages/Series';
import Header from './components/Header';
import Footer from './components/Footer';
import Post from './pages/Post/Index';
import NotFound from "./pages/NotFound/Index";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/series" element={<Series />} />
        
        <Route path="/post/:idPost" element={<Post />}/>
        
            
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
