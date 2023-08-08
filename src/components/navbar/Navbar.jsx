// style 
import "./Navbar.css"


const Navbar = ({usersNumber}) => {
  return (
    <div className="navbar">
        <div className="navbar-container container">
            <h1 className="navbar-logo">CUser</h1>
            <h3 className="navbar-counter">{usersNumber > 0 ? "You have: " + usersNumber : "No Users :("}</h3>
        </div>
    </div>
  )
}

export default Navbar