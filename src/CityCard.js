//  let state = {
//         cityName:'' ,
//         temp : 0,
//         status : '' ,
//         humidity : '',
//         wind :''
//     }

let CityCard = ({state}) =>{
    return(
        <div className="city-card">
            <img  className="card-img"  src="https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"/>
            <p className="city-name">  {state.cityName}</p>
            <p className="temp">{state.temp}</p>
            <p className="condition">{state.status}</p>
            <p className="details" >{state.humidity}</p>
        </div>
    )
}
export default CityCard