import Weatherform from "./weatherform"
import image from "./assets/images/Weather.png"
function Weatherhead(){
    return(
        <>
        <img src={image} alt="wallpaper" style={{position:"relative",width:"1000px",marginTop:"20px"}} ></img>
        <div className="p-3" style={{position:"absolute",top:"30px"}}>
      <h1 className="text-4xl text-center font-bold">WeatherApp</h1>
            <p className="text-center font-medium" >Know the Weather, Plan Your Day</p>
            <Weatherform></Weatherform></div></>
      
 )
}
export default Weatherhead