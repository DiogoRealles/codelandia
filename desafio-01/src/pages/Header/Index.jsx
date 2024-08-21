import { useState } from "react";
import { BsSearch } from "react-icons/bs";

import { Link, useNavigate } from "react-router-dom";

function Header(){

  const initialValueForm = {
    search: ''
  }

  const [form, setForm] = useState(initialValueForm);
  const navigate = useNavigate();

  function onChange(event){
    const {value, name} = event.target;

    setForm({...form, [name]: value});
  }

  function handleSearch(event){
    event.preventDefault();

    navigate(`/search/${form.search}`);
  }

  return(
    <header className="header">
      <div className="container">
        <div className="header__top">
          <Link className="header__logo" to="/">Codelândia</Link>
          <Link className="header__about" to="/about">blog.</Link>
        </div>
        
        <div className="header__search">
          <form className="form" action="./" onSubmit={handleSearch}>
            <input className="form__control" type="text" name="search" placeholder="Search in blog." onChange={onChange}/>
            <button className="form__search" type="onSubmit"><BsSearch /></button>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;