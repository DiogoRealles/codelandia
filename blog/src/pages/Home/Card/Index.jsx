import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import { useState } from 'react';
import { Link } from "react-router-dom";

function Cards({content}){
	const [like, setLike] = useState(true);
	function liked(){
		setLike(previousLike => !previousLike)
	}

  return(
    <div data-aos="fade-up" className={`card ${content.category}`}>
      <div className="card__top">
        <span className="card__date">{content.date}</span>
        <button className="card__like" onClick={liked}>{like ? <BsHeart /> : <BsFillHeartFill/>}</button>
      </div>
      <div className="card__body">
        <Link className="card__title" to={`/post/${content.id}`}>{content.title}</Link>
        <p className="card__text">{content.resume}</p>
      </div>
    </div>
  );
}

export default Cards;