import axios from "axios"
import { useState } from "react"
function Weatherdetails(props) {
       const value=props.value
       const addvalue= props.value
    const [Weather,setweather] = useState()
    const [temp,settemp] = useState()
    const [desc,setdes]   = useState()
       
    function weather(){
        const data = axios(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=dc50eafe1f1b57c08ae41562d12caaaa`)
        data.then(function(response){
            setweather(response.data.weather[0].main)
            settemp(response.data.main.temp)
            setdes(response.data.weather[0].description)
        })
        .catch(function(error){
            console.log("cant find")
        })
    }

    return (
       <>
       <div className="flex justify-center">
        <button onClick={weather} className="bg-blue-700 h-10 text-white p-1 border rounded-xl border-none mt-5 ">Get Report</button>
        </div>       <div className="flex justify-evenly p-3 gap-10 text-center mt-16">
            <div className="border rounded-lg border-white p-4">
                <p className="text-2xl text-white font-medium ">Weather</p>
                {Weather === "Clouds" ? <i class="fa-solid fa-cloud-rain" style={{ color: "blue", fontSize: "40px" }}></i> : <i class="fa-solid fa-cloud-sun" style={{ color: "yellow", fontSize: "40px" }}></i>}
            </div>
            <div className="border rounded-lg border-white p-4">

                <p className="text-2xl text-white font-medium ">Temperature</p>
                <p className="text-2xl text-yellow-400 font-medium ">{temp}</p>
            </div>
            <div className="border rounded-lg border-white p-4">
                <p className="text-2xl text-white font-medium">Description</p>
                <h1 className="text-2xl text-yellow-400 font-medium">{desc}</h1>
            </div>
        </div>
        </>
    )
}
export default Weatherdetails