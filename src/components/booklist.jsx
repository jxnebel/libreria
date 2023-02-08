import React from 'react';
import '../App.css'
import {API_URL} from '../API'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { useAppContext } from './context/appContext';
import { useNavigate } from 'react-router-dom'



function BookList(){

 // State para almacenar la lista de libros
    const [books, setBooks] = useState([]);

// Acceder a las funciones y estado del contexto de la aplicación
    const { favorites,addToFavorites,removeFromFavorites } = useAppContext();

    const navigate = useNavigate()

// Función para verificar si un libro está en favoritos
    const favoritesChecker =(id) => {
        const boolean = favorites.some((book) => book.id === id);
        return boolean;
    }


    useEffect(() =>{
        axios
        .get(API_URL)
        .then((res) =>{
            console.log(res.data);
            setBooks(res.data);
        })
        .catch((err)=>console.log(err));
    }, []);
    
 // Renderizar la lista de libros
    return (
    <div className='bookList'>
        {books.map((book)=>(
            <div key={book.id} className="book">
                <div>
                <h4>{book.title}</h4>
                </div>
                <div>
                    <img src={book.image_url} alt='chale' onClick={() => navigate(`/books/${book.id}}`)} />     
                     </div>
                    <div> 
                        {favoritesChecker(book.id) ? (
                        <button onClick={()=> removeFromFavorites(book.id)}>
                            Remove from favorites
                            </button>
                        ) : ( 
                    <button onClick={()=> addToFavorites(book)}>
                        Add to favorites
                        </button>
                    )}
                    </div>
                </div>
            ))};
        </div>
    );
};

export default BookList;