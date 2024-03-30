//API
const BASE_URL = 'https://fsa-jwt-practice.herokuapp.com'
//hooks
import { useState } from "react"
//components
import Homepage from "./Homepage"

const Authenticate = ({ token, setError, setToken, setUser, setPassword }) => {
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [welcome, setWelcome] = useState({})
  const handleClick = async () => {
    const res = await fetch(`${BASE_URL}/authenticate`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    const authenticationResponse = await res.json()
    if (authenticationResponse.success) {
      setWelcome(authenticationResponse)
      setTimeout(() => setIsSignedIn(true), 2500)

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
            username={welcome.data.username} /> :
          welcome.success ?
            <div className="validate">
              <h1 className="header">Welcome back, {welcome.data.username}!</h1>
              <button>Homepage Loading... </button>
              <p>{welcome.message}</p>
            </div> :
            <div className="validate">
              <h1 className="header">Is that you?</h1>
              <p>validate your token, and go to your Homepage:</p>
              <button onClick={() => handleClick()}>Take me home </button>
            </div>
      }
    </>
  )
}

export default Authenticate