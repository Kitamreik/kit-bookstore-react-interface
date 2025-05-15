import React from "react";
import { Link } from "react-router-dom"; //useNavigate

const Header = () => { //{ user, setUser }
  //const navigate = useNavigate();

  // const handleLogout = () => {
  //   fetch(`http://localhost:4000/logout`)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log("result", result);
  //       localStorage.removeItem("user");
  //       setUser({});
  //       navigate("/");
  //     })
  //     .catch((error) => {
  //       console.log("error", error);
  //       navigate("/admin");
  //     });
  // };
  return (
   <>
     <head>
     <title>Kit's Bookstore</title>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      <script src="https://kit.fontawesome.com/032df15d1f.js" crossorigin="anonymous"></script>
      <script defer src="/js/script.js"></script>
      </head>
      <header className="header">

        <div className="header-1">

            <a href="/" className="logo"> <i className="fas fa-book"></i> Kit's Bookstore</a>
            <div className="icons">
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-shopping-cart"></a>
                <a href="/login" className="fas fa-sign-in-alt"></a>
            </div>
        </div>
        <div className="header-2">
            <nav className="navbar">
                <a href="/">Home</a>
                <br />
                <a href="/books">Books</a>
                <br />
                <a href="/authors">Authors</a>
            </nav>
        </div>
      </header>
      <nav className="bottom-navbar">
        <a href="/" className="fas fa-home"></a>
        <a href="/books" className="fas fa-book"></a>
        <a href="/authors" className="fas fa-user"></a>
      </nav>
   </>
  );
};

export default Header;