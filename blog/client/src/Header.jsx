import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
          <Link to="/" className="logo">MyBlog</Link>
          <nav>
            <Link to="/login" className="login">Login</Link>
            <Link to="" className="register">Register</Link>
          </nav>
        </header>
    )
}