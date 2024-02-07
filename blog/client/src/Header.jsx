import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  const [username, setUsername] = useState(null);
  useEffect(()=>{
    fetch("http://localhost:4000/profile", {
      Credentials: 'include',
    }).then( response => {
      response.json().then(userInfo=>{
        setUsername(userInfo);
      });
    });
  },[]);
    return (
        <header>
          <Link to="/" className="logo">MyBlog</Link>
          <nav>
            {username && (
              <>
                <Link to="/">create new post</Link>
                <a href="">logout</a>
              </>
            )}
            {!username && (
              <>
                <Link to="/login" className="login">Login</Link>
                <Link to="/register" className="register">Register</Link>
              </>
            )}
            
          </nav>
        </header>
    )
}