import axios from 'axios'
import React from 'react'

const InformationUser = ({user, URL, getUsers, setObjectUpdate, setIsShowForm, reset}) => {

  const deleteUser = id => {
    axios.delete(`${URL} ${id}/`)
    .then(res => {
        console.log(res.data)
        getUsers()
    })
    .catch(err => console.log(err))
  }

  const updateUser = () => {
    setIsShowForm(true)

    const obj = {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password: user.password,
      birthday: user.birthday
    }

    reset(obj)
    setObjectUpdate(user)
  }

  return (
    <div className='card'>
        <h2>{`${user.first_name} ${user.last_name}`}</h2> 
            <div>
                <div>
                    Email: {user.email}
                </div>
                <div>
                <i class="fa-solid fa-cake-candles"></i> Birthday: {user.birthday}
                </div>
            </div>
        <button onClick={() => deleteUser(user.id)} className='color1'><i class="fa-solid fa-trash"></i></button>
        <button className='color2' onClick={updateUser}><i class="fa-solid fa-pen"></i></button>      
    </div>
  )
}

export default InformationUser