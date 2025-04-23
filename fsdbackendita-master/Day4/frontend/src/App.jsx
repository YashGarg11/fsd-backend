import React from 'react'
import Register from './components/Register'
import View from './components/View'
import Update from './components/Update'
import './App.css'
import Delete from './components/Delete'
const App = () => {
  return (
    <div>
      <h1>User Registration System</h1>
      <Register/>
      <Update/>
      <Delete/>
      <View/>
    </div>
  )
}

export default App
