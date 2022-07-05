import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Form from './components/Form'
import InformationUser from './components/InformationUser'
import { useForm } from 'react-hook-form'

const URL = 'https://users-crud1.herokuapp.com/users/'

function App() {

  const {handleSubmit, register, reset} = useForm()

  const [users, setUsers] = useState()
  const [isShowForm, setIsShowForm] = useState(false)
  const [objectUpdate, setObjectUpdate] = useState()

  const getUsers = () => {
    axios.get(URL)
    .then(res => setUsers(res.data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getUsers()
  }, [])

  const createUser = newUser => {
    axios.post(URL, newUser)
    .then(res => {
      console.log(res.data)
      getUsers()
    })
    .catch(err => console.log(err))
  }

  const updateUserById = (id, updateUser) => {

    axios.patch(`${URL}${id}/`, updateUser)
      .then(res => {
        console.log(res.data)
        getUsers()
        setObjectUpdate()
        setIsShowForm(false)
      })
      .catch(err => console.log(err))
  }

  const showForm = () => {
    const obj = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthday: ""
    }
    reset(obj)
    setIsShowForm(!isShowForm)
  }

  return (
    <div>
      <div className='centered-object'>
        <button className='button' onClick={showForm}>{isShowForm ? 'Hide' :'Create User'}</button>
      </div>
      <div className='App'>
          {
            isShowForm &&
            <Form 
            createUser={createUser}
            updateUserById={updateUserById}
            objectUpdate={objectUpdate}
            handleSubmit={handleSubmit}
            reset={reset}
            register={register}
            />
          }
        </div>
      <div className="App"> 
        {
          users?.map(user => (
            <InformationUser 
            key={user.id}
            user={user}
            URL={URL}
            getUsers={getUsers}
            setObjectUpdate={setObjectUpdate}
            setIsShowForm={setIsShowForm}
            reset={reset}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
