import { useState } from "react";
import {Users,use} from "./Users";



function App() {
  /*let arr =[]
for(let i=1;i<21;i++){arr.push({"id":i,"user":""})}

  const[users,setUsers]=useState(arr)
  */
  

  

  return (
    <div>

      {use.map(el=>
        <Users key={el.id} users={el.login}/>
        )}
      
    </div>
  );
}

export default App;
