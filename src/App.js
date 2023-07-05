import { useState } from 'react'

const App = () => {
//   const [fullName, setFullName] = useState('')
//   const [email, setEmail] = useState('')
//   const [age, setAge] = useState('')  

  const [oneUser, setOneUser] = useState({fullName: "", email: "", age: ""})
  const [users, setUsers] = useState([])

  const formChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setOneUser({...oneUser, [name]: value})
  }
  

  const formSubmit = (e) => {
    e.preventDefault()

    if(oneUser.fullName && oneUser.email && oneUser.age) {
        const newUser = {fullName: oneUser.fullName, email: oneUser.email, age: oneUser.age}
        setUsers((users) => {
            return [...users, newUser]
        })
    } else {
        console.log('empty values')
    } 

    // setFullName('')
    // setEmail('')
    // setAge('')
  }

  return <article>
    <form onSubmit={formSubmit}>
        <input 
            className="userInfo" 
            type="text" 
            placeholder="Name" 
            value={oneUser.fullName}
            onChange={formChange}
            name="fullName"
        />
        <input 
            className="userInfo" 
            type="email" 
            placeholder='Email' 
            value={oneUser.email}
            onChange={formChange}
            name="email"
        />

        <input 
            className="userInfo" 
            type="text" 
            placeholder='age' 
            value={oneUser.age}
            onChange={formChange}
            name="age"
        />

        <input type="submit"/>
    </form>

    {users.map((oneUser, index) => {
        const {fullName, email, age} = oneUser
        return <div className="item" key={index}>
            <h4>{fullName}</h4>
            <p>{email}</p>
            <p>{age}</p>
        </div>
    })}

  </article>
}

export default App