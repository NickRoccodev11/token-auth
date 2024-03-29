//API
const BASE_URL = 'https://fsa-jwt-practice.herokuapp.com'
//hooks
import { useState } from 'react'
//components
import Login from './Login'
import Authenticate from './Authenticate'

function App() {
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [token, setToken] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if(!user || !password){
        alert("please provide a username and password to continue")
        return;
      }
      const res = await fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: user,
          password: password
        })
      });
      const jsonData = await res.json()
      if (jsonData.token) {
        //use this to test error route: 
        // jsonData.token="wrongtoken"
        setToken(jsonData.token)
        localStorage.setItem("token", token)
      }
      setError("")
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <>
      {error ?
        <div className='error'>
          <h3>{error}</h3>
          <button onClick={() => setError("")}>go back</button>
        </div> :
        token ?
          <Authenticate
            token={token}
            user={user}
            setError={setError}
            setToken={setToken}
            setPassword={setPassword}
            setUser={setUser}
          /> :
          <Login
            setUser={setUser}
            setPassword={setPassword}
            handleSubmit={handleSubmit}
            user={user}
            password={password}
          />
      }
    </>
  )
}

export default App
