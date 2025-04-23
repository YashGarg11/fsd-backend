import React, { useEffect, useState } from 'react'
import axios from 'axios'
const View = () => {
    const [users, setUsers] = useState([]);
    const handleview=async ()=>{
       const res=await axios.get('https://fsdbackendita.onrender.com/users');
       setUsers(res.data);
    }
    useEffect(()=>{
        handleview();
     },[])
  return (
    <div>
        <h1>View Registered Users</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user)=>(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
      
    </div>
  )
}

export default View
