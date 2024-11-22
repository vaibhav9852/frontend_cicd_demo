import axios from "axios";
import { useEffect, useState } from "react";
 
const Users : React.FC = () => {
 const [users,setUsers] = useState<String[]>() 
 console.log('users page')
 const getUsers  =  async () : Promise<void> =>{
    let {data}  = await  axios.get('http://localhost:5005/users') 
    setUsers(data) 
 }
  useEffect(()=>{
     getUsers() 
  },[])
    return (
      <div>
        <h1>Users List</h1>
        {
         users?.map((user)=>(
            <li>{user}</li>  
          ))
        }
        {/* {
          users.length<0 && <ul> 
          <li>name 1</li>
          <li>name 2</li>
          <li>name 3</li>
           </ul>
        }  */}
      </div>
    );
  };
  
  export default Users;