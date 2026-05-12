import { useEffect, useState } from "react"

const useWeather = () => {

    const [state, setState] = useState({
        search:'',
        cityName: '',
        temp: 0,
        status: '',

        isfetch: false,
    })



    const handleSearchbtn = (value) => {
        if (state.search) {

            fetch(`https://wttr.in/${state.search}?format=j1`).then(res => res.json()).then(data => {
                setState({
                ...state
                , isfetch: true,
                cityName: data.nearest_area[0].country[0].value,
                temp: data.current_condition[0].temp_C, 
                status: data.current_condition[0].weatherDesc[0].value, 
            })


            })
            



        } else {
            alert("Enter the City")
        }
    }



    return { state, setState, handleSearchbtn }
}
export default useWeather