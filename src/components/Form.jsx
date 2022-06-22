import React from 'react'
import { useForm } from 'react-hook-form'

const Form = ({createUser, updateUserById, objectUpdate, handleSubmit, reset, register}) => {

    const createNewUser = () => {
        const createUser = {
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          password: user.password,
          birthday: user.birthday
        }
    
        axios.put(URL, createUser)
        .then(res => {
          console.log(res.data)
          getUsers()
        })
        .catch(err => console.log(err))
      }

    const defaultValuesForm = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        birthday: ""
    }

    const submit = data => {
        if(objectUpdate !== undefined){
            updateUserById(objectUpdate.id, data)
            reset(defaultValuesForm)
        } else {
            createUser(data)
        }
        reset(defaultValuesForm)
    }

  return (
    <div className='centered-object'>
        <form className='formulari-card' onSubmit={handleSubmit(submit)}>
            <h2>New User</h2>
            <div>
                <label htmlFor="first_name"><i class="fa-solid fa-user"></i></label>
                <input type="text" id='first_name' {...register('first_name')}/>
            </div>
            <div>
                <label htmlFor="last_name"><i class="fa-solid fa-user"></i></label>
                <input type="text" id='last_name' {...register('last_name')}/>
            </div>
            <div>
                <label htmlFor="email"><i class="fa-solid fa-envelope"></i></label>
                <input type="text" id='email' {...register('email')}/>
            </div>
            <div>
                <label htmlFor="password"><i class="fa-solid fa-lock"></i></label>
                <input type="password" id='password' {...register('password')}/>
            </div>
            <div>
                <label htmlFor="birthday"><i class="fa-solid fa-cake-candles"></i></label>
                <input type="text" id='birthday' {...register('birthday')}/>
            </div>
            <button onClick={createNewUser}>Submit</button>
        </form>
    </div>
  )
}

export default Form