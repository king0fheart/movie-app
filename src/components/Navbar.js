import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  let navigate = useNavigate();
  const [text, setText] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/", {state:{ search: text }});
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Movie App</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" id="searchText" name="searchText" onChange={(event) => setText(event.target.value)} placeholder="Search" aria-label="Search" />
            <button className="btn bg-info" type="submit" onClick={handleSearch}>Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}
