import React from 'react';

function Food(props){
  console.log(props)
  return <h1>I like potato</h1>;
}

function App() {
  return (
    <div>
      <h1>hello</h1>
      <Food fav="kimchi" />
    </div>
  );
}

export default App;
