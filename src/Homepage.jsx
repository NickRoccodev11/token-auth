const Homepage = ({ username, setUser, setPassword, setToken }) => {
  return (
    <div className="homepage">
      <h1 className="header"> {username}'s Home Page!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est asperiores modi aliquid, alias, vel molestias dolores odio ea mollitia, id repudiandae! Tempora minima dolorum rerum, veritatis accusantium officia quasi obcaecati.</p>
      <button
        onClick={() => {
          setUser("")
          setPassword("")
          setToken(null)
        }}
      >logout</button>
    </div>
  )
}

export default Homepage