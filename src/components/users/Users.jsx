import React from 'react'
import "./Users.css"
import male from "../../assets/male-avatar-boy-face-man-user-9.svg"
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg"
import { useDispatch, useSelector } from 'react-redux'
import { addToFollowers, removeFromUsers } from '../../context/slice/usersSlice'


function Users() {

  let users = useSelector(state => state.users.value)
  let dispatch = useDispatch()

  let cards = users?.map(el => (
    <div key={el.id} className="users__card">
      <img src={el.gender === "male" ? male : female} alt="" />
      <h2>{el.username} {el.name}</h2>
      <p>{el.proffession}</p>
      <p>{el.age}</p>
      <button onClick={()=> dispatch(removeFromUsers(el.id))}>Remove</button>
      <button onClick={()=> dispatch(addToFollowers(el))}>Follow</button>
    </div>
  ))

  return (
    <div className='users__wrapper'>
      {cards}
    </div>
  )
}

export default Users