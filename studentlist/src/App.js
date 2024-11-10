import { useState } from "react";
import Studentlist from "./studentlist";
import Favourite from "./favourite";
import { BrowserRouter ,Routes,Route,Link} from "react-router-dom";

function App() {
  const [list, addlist] = useState([{
    id: 1,
    name: "janani"
  },
  {
    id: 2,
    name: "Anusha"
  },
  {
    id: 3,
    name: "priya"
  },{
    id:4,
    name:"dhanush"
  },
{
  id:5,
  name:"nathiya"
},
{
  id:6,
  name:"venkat"
}])
  const [newlist, setlist] = useState()
  return (
    
    <div>

    
       <BrowserRouter>
      <div className="bg-red-300 text-white text-2xl p-8 flex gap-5 underline"> 
       <Link to={"/"} >List of Student</Link>
       <Link to={"/fav"} >Favourite Student</Link></div>

       <Routes>
     <Route path="/" element={<Studentlist list={list} addlist={addlist} newlist={newlist} setList={setlist}></Studentlist>}></Route>
     <Route path="/fav" element={<Favourite list={list} addlist={addlist} newlist={newlist} setList={setlist}></Favourite>}></Route>
     </Routes>
</BrowserRouter>
</div>

  );
}

export default App;
