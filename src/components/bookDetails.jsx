import React, {useState, useEffect} from 'react';
import '../App.css'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { BOOK_DETAIL_URL } from '../API';


// Esta función renderiza los detalles de un libro en particular
function BookDetails(){

// Estado para almacenar los detalles del libro
    const [book, setBook] = useState({});

    const [error, setError] = useState(null);
    
// Obtiene el id del libro a partir de los parámetros de la URL
    const { id } = useParams();
    
  // Efecto para obtener los detalles del libro
    useEffect(()=>{
        axios
        .get(`${BOOK_DETAIL_URL}/${id}`)
        
        .then((res) => {
         setBook(res.data);
        })
        .catch((err)=> setError(err));
    },[id]);
    

    if (error) {
        return <div>An error occurred: {error.message}</div>
    }

     // Renderizar los detalles de los libros

    return (
        <div className='bookDetails'>
            <div>
                <h2>{book && book.title}</h2>
                    <img src={book && book?.image_url} alt='#'  />
                <div>
                    <h2>Description</h2>
                    <p>{book && book?.description}</p>
                    <h2>Authors</h2>
                    <p>{book && book?.authors}</p>
                    <h2>Genres</h2>
                    <p>{book && book?.genres}</p>
                </div>
            </div>
        </div>
    )
}

export default BookDetails;