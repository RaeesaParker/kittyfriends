import React from 'react';



// Create a searchbox

function SearchBox(props){

  return(
    <div className='db tc' >
      <input
        type='search'
        placeholder='Search Kittens'
        className='pa3 ba b--blue bg-lightest-blue'
        onChange={props.onSearchChange}
      />
    </div>
  )

};


export default SearchBox;
