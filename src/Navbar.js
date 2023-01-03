import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Kavlium ❤️
      </Link>
      <ul>
        <Link to="/contact">Contacts</Link>
        <Link to="/registration">Registration Form</Link>
      </ul>
    </nav>
  )
}