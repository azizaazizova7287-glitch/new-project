import '../App.css'

const Navbar = () => {
  return (
    <div className="Navbar">
        <h1>coddycamp</h1>
        <ul className= "Menu">
        <li><a href="#">Home</a></li> 
        <li><a href="#">About</a></li>
         <li><a href="#">Courses</a></li> 
         <li><a href="#">Contact</a></li>
         </ul>
         <button className="btn">Sign in</button>

    </div>
  )
}

export default Navbar