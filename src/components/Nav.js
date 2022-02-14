import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" >Home</Link>
                <div>
                    <ul className="navbar-nav me-auto mb-2 mb-md-0 navbar_wrapper">
                        <div className="nav-item active">
                            {
                                localStorage.getItem('email', 'pwd') ?
                                    <>
                                        <li className="nav-item active">
                                            <Link to="/addbook" >AddBook</Link>
                                        </li>
                                        <li className="nav-item active">
                                            <Link to="/updatebook" >UpdateBook</Link>
                                        </li>
                                        <li className="nav-item active">
                                            <Link to="/booklist" >BookList</Link>
                                        </li>
                                        <li className="nav-item active">
                                            <Link to="/addauthor" >AddAuthor</Link>
                                        </li>
                                        <li className="nav-item active">
                                            <Link to="/updateauthor" >UpdateAuthor</Link>
                                        </li>
                                        <li className="nav-item active">
                                            <Link to="/authorlist" >AuthorList</Link>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li className="nav-item active">
                                            <Link to="/" >Home</Link>
                                        </li>

                                        <li className="nav-item active">
                                            <Link to="/login" >Login</Link>
                                        </li>
                                        <li className="nav-item active">
                                            <Link to="/register" >Register</Link>
                                        </li>

                                    </>
                            }


                        </div >
                    </ul>
                </div>
            </div>

        </nav>
    );
};
export default Nav;
