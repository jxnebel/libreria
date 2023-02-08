import React from 'react';
import '../App.css'
import { useAppContext } from './context/appContext';

// Esta es la función principal de la vista de favoritos
function Favorites(){

// Destructuración para obtener las funciones y variables del contexto
    const { favorites,addToFavorites,removeFromFavorites } = useAppContext();

    console.log('favorites are', favorites);

// Función para verificar si un libro ya está en la lista de favoritos
    const favoritesChecker =(id) => {
        const boolean = favorites.some((book) => book.id === id);
        return boolean;
    }

// Renderiza los favoritos
    return (
        <div className='favorites'>
            {favorites.length > 0 ? (favorites.map((book)=>(
            <div key={book.id} className="book">
                <div>
                <h4>{book.title}</h4>
                </div>
                <div>
                    <img src={book.image_url} alt='#' />     
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
            ))
    ) : (
        <h1>You don't have favorites books yet!</h1>
    )};
        </div>         
    );
};

export default Favorites