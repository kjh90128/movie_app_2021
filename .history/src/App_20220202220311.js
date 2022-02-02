import React from 'react';

function Food({fav}){
  return <h1>I like {fav}</h1>;
}

const foodILike = [
  {
    name:'Kimchi',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNH_HGzgWqdRLxS06VRh9Ylq07oyGl1bwbRQ&usqp=CAU'
  },
  {
    name:'Samgyeopsal',
    img:''
  },
  {
    name:'Bibimbap',
    img:''
  },
  {
    name:'Doncasu',
    img:''
  },
  {
    name:'Kimbap',
    img:''
  }
];

function App() {
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}

export default App;
