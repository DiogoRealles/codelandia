import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import Header from '../Header/Index';

import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../../services/api';
import Footer from '../Footer/Index';

function Post(){
  const [post, setPost] = useState([]);
  const {idPost} = useParams();

  useEffect(() => {
    if(idPost){
      api.get(`/posts/${idPost}`)
      .then((response) => {
        setPost(response.data);
      });
    }
  }, []);

  return(
    <>
      <Header />
      
      <div data-aos="zoom-in" className="container">
        <div className="post">
          <h6 className={post.category}>{post.category}</h6>
          <h3 className='post__title'>{post.title}</h3>
          <p className='post__date'>{post.date}</p>
          <div className="post__banner">
            <img src={post.imageUrl} alt="Image banner" />
          </div>
          <div className="post__content">
            <h1 className='post__subtitle'>{post.title}</h1>
            <p className='post__text'>{post.content}</p>
          </div>

          <div className="share">
            <strong>Compartilhe</strong>
            <ul className="socials">
              <li>
                <a href="https://www.facebook.com/">
                  <BsFacebook />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/">
                  <BsTwitter />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/">
                  <BsLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Post;