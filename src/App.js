import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import BookDetails from './components/bookDetails'
import BookList from './components/booklist'
import Favorites from './components/favorites'
import Footer from './components/footer'
import Navbar from './components/navbar'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path='/' element ={<BookList />} />
      <Route path='books/:id' element ={<BookDetails />} />
      <Route path='/favorites' element ={<Favorites />} />
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
