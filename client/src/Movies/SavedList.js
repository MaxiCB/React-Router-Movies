import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">
        <NavLink to={'/movies/' + movie.id}
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}>
          {movie.title}
        </NavLink>
      </span>
    ))}
    <div className="home-button">
      <Link exact to='/'>
      Home
      </Link></div>
  </div>
);

export default SavedList;
