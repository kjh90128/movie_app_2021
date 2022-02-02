import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating}){
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id:1,
    name:'Kimchi',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNH_HGzgWqdRLxS06VRh9Ylq07oyGl1bwbRQ&usqp=CAU',
    rating:5
  },
  {
    id:2,
    name:'Samgyeopsal',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0vnmlggOSI67C1G1Zp0ojNsZ8CKUzLYDCpA&usqp=CAU',
    rating:4.9
  },
  {
    id:3,
    name:'Bibimbap',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfzUMO4DZF34UlQgq4-1ko1bM4Y81EhPmN6w&usqp=CAU',
    rating:3
  },
  {
    id:4,
    name:'Doncasu',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvsQgNKClR0Kq7VS_ys4_HF6P1a-XDx1PjyA&usqp=CAU',
    rating:2.5
  },
  {
    id:5,
    name:'Kimbap',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9CQ-kw3mPPqdkOdVhRvHL2hFHziQ0X84CrA&usqp=CAU',
    rating:3.4
  }
];

function App() {
  return (
    <div>
      {
        foodILike.map(dish=>(
          <Food key={dish.id} name={dish.name} picture={dish.img} rating={dish.rating}/>
        ))
      }
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

export default App;
