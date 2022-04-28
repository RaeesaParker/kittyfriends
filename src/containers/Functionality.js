import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import {kittens} from '../components/kittens';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';


// Component to include Search box which will filter out cards when searching


function Functionality() {


  // Create a state that will update the search field
  const [searchObject, setSearchObject] = React.useState(' ');



  // Create a function that will store any changes made to the search box
  function onSearchChange(event){
    // Set the state to be the search item
    setSearchObject(event.target.value)
  }


  // Filter through the kittens array to find matching
  const filteredKittens = kittens.filter((kitten) => {
    return kitten.name.toLowerCase().includes(searchObject.toLowerCase())
  })



  return (

    <div>
      <SearchBox onSearchChange={onSearchChange}/>
      <Scroll>
        <ErrorBoundary>
          <CardList kittens={filteredKittens}/>
        </ErrorBoundary>
      </Scroll>
    </div>

  );

}

export default Functionality;
