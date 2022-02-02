import React from 'react';

function Food({name, picture}){
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
      </div>
  );
}

const foodILike = [
  {
    name:'Kimchi',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNH_HGzgWqdRLxS06VRh9Ylq07oyGl1bwbRQ&usqp=CAU'
  },
  {
    name:'Samgyeopsal',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0vnmlggOSI67C1G1Zp0ojNsZ8CKUzLYDCpA&usqp=CAU'
  },
  {
    name:'Bibimbap',
    img:''
  },
  {
    name:'Doncasu',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvsQgNKClR0Kq7VS_ys4_HF6P1a-XDx1PjyA&usqp=CAU'
  },
  {
    name:'Kimbap',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9CQ-kw3mPPqdkOdVhRvHL2hFHziQ0X84CrA&usqp=CAU'
  }
];

function App() {
  return (
    <div>
      <h1>hello</h1>
      {foodILike.map(dish=>(<Food name={dish.name} picture={dish.img} />))}
    </div>
  );
}

export default App;
