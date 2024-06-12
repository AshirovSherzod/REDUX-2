import React, { useState } from 'react'
import "./CreateUser.css"
import { useDispatch, useSelector } from 'react-redux'
import { addToUsers } from '../../context/slice/usersSlice'

function CreateUser() {
    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [proffession, setProfession] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")

    let dispatch = useDispatch()

    const handleSubmit = (e) => {
      e.preventDefault()
      let newUser = {
        id: new Date().getTime(),
        username,
        name,
        proffession,
        age: +age,
        gender,
      }

      dispatch(addToUsers(newUser))
    }
  return (
    <div className='create__user'>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit} className='create__user-form' action="">
        <input required type="text" placeholder='username' value={username} onChange={(e)=> setUsername(e.target.value)}/>
        <input required type="text" placeholder='name' value={name} onChange={(e)=> setName(e.target.value)}/>
        <input required type="text" placeholder='profession' value={proffession} onChange={(e)=> setProfession(e.target.value)}/>
        <input required type="number" placeholder='age' value={age} onChange={(e)=> setAge(e.target.value)}/>
        <select required name="" id="" value={gender} onChange={(e)=> setGender(e.target.value)}>
          <option value="">gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default CreateUser