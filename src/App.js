import "./App.css";
import Tours from "./components/Tours";
import data from "./data";
import React, { useState } from "react";

function App() {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0){
    return(
      <div className="refresh">
        <h2> No Tours left</h2>
        <button className="button-white" onClick={() => setTours(data)}>
          Refresh Button
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
