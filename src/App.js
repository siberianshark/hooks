import React from "react";
 function App() {
  //let numbers =[1,2,3];
  const [numbers, setNumbers] = React.useState([1,2,3]);

  const  addNumber = () =>{
    const randNumber = Math.round(Math.random()*10);
    setNumbers([...numbers, randNumbers]);
    //numbers.push(4);
    console.log(numbers);
  }
  return (
    
  <div className="App">
    <ul>
      {
        numbers.map((num, index) =>
           (<li key={index}>{num}</li>))
      }
    </ul>
<button onClick={addNumber}>new</button>
  </div>
  )
 }
 export default App;
s