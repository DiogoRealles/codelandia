import Footer from "../Footer/Index";
import Card from '../Home/Card/Index';

import { BsSearch } from "react-icons/bs";

import {useParams} from 'react-router-dom';
import { useState, useEffect } from "react";

import api from "../../services/api";

function Search(){
  
  const {word_search} = useParams();

  const [word, setWord] = useState(word_search);
  const [search, setSearch] = useState([]);
  const [form, setForm] = useState([]);

  useEffect(() => {

    if(word){
    
      api.get(`/posts?q=${word}`)
      .then((response) => {
        setSearch(response.data);
      });
    }

  }, [word]);


  function onChange(event){
    const {value, name} = event.target;

    setForm({...form, [name]: value});
  }

  function handleSearch(event){
    event.preventDefault();

    setWord(form.search);
  }

  return(
    <>
      <div className="search">
          <div className="search__header">

          <div className="container">
            
          <h3>{search.lenth} results to</h3>

          <h4>"{word}"</h4>

          <form className="form" action="./" onSubmit={handleSearch}>
            <button className="form__search" type="onSubmit"><BsSearch /></button>
            <input className="form__control" type="text" name="search" placeholder="Search in blog." onChange={onChange}/>
          </form>
          
          </div>
          </div>

          <div className="container">
          {
            search.map((item) => {
              return <Card key={item.id} content={item}/>
            })
          }
        
          </div>

      </div>

      {/* <Footer /> */}
    </>
  );
}

export default Search;