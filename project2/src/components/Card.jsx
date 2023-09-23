import React from 'react';

const Card = (props) => {
  return (
    <div className='card'>
      <img
        className='card-image'
        src={props.image}
        width='200'></img>
      <div className='card-name'>
        <h3>{props.name}</h3>
      </div>
      <a
        href={props.link}
        target='_blank'>
        <button className='view-restaurant'>Visit Restaurant</button>
      </a>
    </div>
  );
};

export default Card;