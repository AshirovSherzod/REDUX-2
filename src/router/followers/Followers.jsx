import React from 'react'
import './followers.css'
import { useSelector } from 'react-redux'
import male from "../../assets/male-avatar-boy-face-man-user-9.svg"
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg"

const Followers = () => {

  let followers = useSelector(state => state.users.followers)

  let cards = followers?.map(el => (
    <div key={el.id} className="users__card">
      <img src={el.gender === "male" ? male : female} alt="" />
      <h2>{el.username} {el.name}</h2>
      <p>{el.proffession}</p>
      <p>{el.age}</p>
      <button onClick={()=> dispatch(removeFromUsers(el.id))}>Remove</button>
    </div>
  ))

  return (
    <div className='followers__wrapper'>
      {cards}
    </div>
  )
}

export default Followers