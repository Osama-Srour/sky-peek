import logo from './logo.svg';
import './App.css';
import CityCard from './CityCard';
import useWeather from './useWeather';

//  let state = {
//         cityName:'' ,
//         temp : 0,
//         status : '' ,
//         humidity : '',
//         wind :''
//     }
function App() {
  const {state , setState ,handleSearchbtn} = useWeather()
 
  return (
    <div className="App">
      <input type='text' onChange={(e) =>{setState({...state , search : e.target.value })}}/>
      <button onClick={handleSearchbtn}>Search</button>
      <div className='card-containers'>
        {(state.isfetch) ? <CityCard state = {state} /> : <p>  . . . </p> }
      </div>
    </div>
  );

}

export default App;
