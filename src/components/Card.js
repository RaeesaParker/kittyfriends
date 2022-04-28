import React from 'react';
import './card.css';



function Card(props){

  const {id, name , email} = props;

  return(
    <div className='bg-light-green br2 pa3 ma2 grow dib bw2 shadow-5 tc'>

      <img alt='Kitten Profile' src={`https://robohash.org/${id}?set=set4&size=200x200`} />

      <div >

        <h2> {name} </h2>
        <p> {email} </p>

      </div>

    </div>
  )
};

export default Card;
