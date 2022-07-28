import React from 'react'

export const MovieCard = (props) => {
  console.log("props: ", props.data);
  return (
    <div>
      <div className="card" style={{width: "18rem"}}>
        <img src={props.data.Poster} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.data.Title}</h5>
          <p className="card-text">{props.data.Year}</p>
        </div>
      </div>
    </div>
  )
}
