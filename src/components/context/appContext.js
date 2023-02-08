import { createContext, useContext } from "react";
import { useState } from "react";

// Se crea un contexto para el contexto de la aplicación.
const AppContext = createContext(null);

// Se crea un hook que permite acceder al contexto de la aplicación.
export const useAppContext = () => {
    const context = useContext(AppContext);
    
    if(context === undefined){
        throw new Error('Appcontext must be within appContentProvider!')
    }
    return context;
};

// Se crea un componente que proporciona el contexto de la aplicación.
const AppContextProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);



const addToFavorites = (book) => {
// Se hace una copia de los favoritos actuales.
    const oldFavorites = [...favorites];

// Se crea una nueva lista de favoritos con el nuevo libro.
    const newFavorites = oldFavorites.concat(book);

    setFavorites(newFavorites);
}

const removeFromFavorites = (id) => {
    const oldFavorites = [...favorites];

// Se crea una nueva lista de favoritos sin el libro a eliminar.
    const newFavorites = oldFavorites.filter((book)=>book.id !== id);

    setFavorites(newFavorites);
}
 

    return (
        <AppContext.Provider value={{favorites,addToFavorites,removeFromFavorites}}>
            {children}
        </AppContext.Provider>
    )


}

export default AppContextProvider;