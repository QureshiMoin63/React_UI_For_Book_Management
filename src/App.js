import React from 'react';
import Login from "./pages/Login";
import './App.css';import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Register from  "./pages/Register";
import AddBook from  "./pages/AddBook";
import UpdateBook from  "./pages/UpdateBook";
import Protected from "./pages/Protected";
import AddAuthor from "./pages/AddAuthor";
import BookList from "./pages/BookList";
import AuthorList from "./pages/AuthorList";
import UpdateAuthor from "./pages/UpdateAuthor";



function App() {
    return(
            <div className="App">               
           <BrowserRouter>
           
        <main className= "form-signin">
        <Routes>
            
           <Route path="/" element= {<Home/>}></Route>
           <Route path="/login" element={<Login/>}></Route>
           <Route path="/register" element={<Register/>}></Route>
           <Route path="/addauthor" element={<AddAuthor/>}></Route>
           <Route path="/authorlist" element={<AuthorList/>}></Route>
           <Route path="/updateauthor/:id" element={<UpdateAuthor/>}></Route>
           <Route path="/addbook" element={<AddBook/>}></Route>
           <Route path="/booklist" element={<BookList/>}></Route>
           <Route path="/updatebook/:id" element={<UpdateBook/>}></Route>
           </Routes>
        </main>
        
        </BrowserRouter>
        </div>
    );
}   

export default App;


<Route path="/" element={<App />}></Route>