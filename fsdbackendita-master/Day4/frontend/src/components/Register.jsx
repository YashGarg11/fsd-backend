import React from 'react'
import axios from 'axios'
const Register = () => {
    const handleregister =async (e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const age =e.target.age.value;
        const users={name,age}
        await axios.post('https://fsdbackendita.onrender.com/users',users)
        alert('User registered successfully')
    }
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleregister}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Age:
          <input type="text" name="age" />
        </label>
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Register
