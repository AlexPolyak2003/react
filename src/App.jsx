import './index.js'
import { useState } from 'react';




const App = () => {

  const [temperatureValue, setTemperatureValue]=useState(10);
  const [temparatureColor, setTemperatureColor]=useState('cold')


  const increaseTemperature = () =>{
    const newTemperature = temperatureValue + 1
    setTemperatureValue(temperatureValue + 1)
    
    if (newTemperature >= 15){
      setTemperatureColor('hot')
    } 
  }

  const decreaseTemperature = () =>{
    const newTemperature = temperatureValue - 1 
    setTemperatureValue(temperatureValue - 1)

    if (newTemperature <= 15){
      setTemperatureColor('cold')
    }
  }
  return (
    <header className='head'>

      <div className='container'>
          <div className={`temparature ${temparatureColor}`}> 

              <div className='text'>
                {temperatureValue} C
              </div>

          </div> 



      <div className='buttonContainer'>
        <button onClick={()=>increaseTemperature()}>+</button>
        <button onClick={()=>decreaseTemperature()}>-</button>
      </div>

      
        
      </div>
    </header>
  );
}






export default App;
