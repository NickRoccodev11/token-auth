//API
const BASE_URL = 'https://fsa-jwt-practice.herokuapp.com'
//hooks
import { useState } from "react"
//components
import Homepage from "./Homepage"

const Authenticate = ({ token, user, setError, setToken, setUser, setPassword }) => {
  const [isSignedIn, setIsSignedIn] = useState(false)
  const handleClick = async () => {
    const res = await fetch(`${BASE_URL}/authenticate`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    const jsonData = await res.json()
    if (jsonData.success) {
      setIsSignedIn(true)
    } else {
      setUser("")
      setPassword("")
      setError("Incorrect Token!")
      setToken(null)
    }
  }
  return (
    <>
      {
        isSignedIn ?
          <Homepage
            setUser={setUser}
            setPassword={setPassword}
            setToken={setToken}
            user={user} /> :
          <div className="validate">
            <h1 className="header">Hello, {user}!</h1>
            <p>validate your token, and go to your Homepage:</p>
            <button onClick={() => handleClick()}>Take me home </button>
          </div>
      }
    </>
  )
}

export default Authenticate