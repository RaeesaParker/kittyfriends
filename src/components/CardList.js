import React from 'react';
import Card from './Card';



function CardList(props){


  const kittens = props.kittens;


  // Filter through the list of kittens and generate a card
  const cardComponent = kittens.map((kitten, index) => {
    return (
      <Card
        key={index}
        id={kittens[index].id}
        name={kittens[index].name}
        email={kittens[index].email}
      />
    )
  })


  return(
    <div className='tc'>
      {cardComponent}
    </div>
  )
};

export default CardList;
