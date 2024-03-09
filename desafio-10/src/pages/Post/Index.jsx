import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";

import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from "../../services/api";

import LastNews from '../../components/LastNews';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Post(){
  const [post, setPost] = useState([]);
  const {idPost} = useParams();
  
  useEffect(() => {
    AOS.init({
      once: true,
    })
  }, []);

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
      <div className="container">
        <div className="post">
          <div data-aos="zoom-in" data-aos-duration="1000" className="post__banner">
            <img src={post.imageUrl} alt="Image banner" />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" className="post__content">
            <p className='post__date'>{post.date}</p>
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
      <LastNews />
    </>
  );
}

export default Post;