const Login = ({ setPassword, setUser, handleSubmit, user, password }) => {
  return (
    <>
      <h1 className="header">Please Log In</h1>
      <div className="login">
        <form onSubmit={e => handleSubmit(e)}>
          <label >User Name: </label><br />
          <input
            value={user}
            type="text"
            onChange={e => setUser(e.target.value)}
          /><br />
          <label > Password</label><br />
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="text"
          /><br />
          <button>Submit User Info</button>
        </form>
      </div>
    </>
  )
}

export default Login