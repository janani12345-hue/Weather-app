import Weatherdetails from "./weatherdetails"
import { useState } from "react"
function Weatherform(){
    const [value,addvalue] = useState()
    function handlechange(event){
        addvalue(event.target.value)
       
    
    }
    return(
        <>
        <div className="bg-white mt-32 border rounded-xl p-1 flex justify-between">
        <input type="text" className="border-none outline-none bg-transparent w-60 h-8" onChange={handlechange}placeholder="Search weather details" >
        </input>
       


        </div>
        
        <Weatherdetails value={value} addvalue={addvalue}></Weatherdetails>
        </>
    )
}
export default Weatherform