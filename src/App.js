import {React, useState } from "react"
import './App.css';
import Car from "./Components/Car";
import cars from "./cars";

function App() {
  const [car, setCars] = useState(cars);

  const handleClear = () => {
     setCars([]);
  };
  return (
    <div className="App">
      <h2> Car List </h2>
      <h2>{car.length} Cars in the lot</h2>
      <Car car={car}/>
      {car.length !== 0 ? (
      <button onClick={handleClear}> Clear all</button>
      ) : (
      <button onClick={() => setCars(cars)}>Reset</button>
      )}
    </div>
  );
}

export default App;
