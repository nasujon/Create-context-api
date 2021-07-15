import React, {useState, useContext} from 'react'
import BookWrap from '../Styles/Books';
import {BookContext} from './BookContext';

const Books = () => {
  const [books, setBooks] = useContext(BookContext);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [author, setAuthor] = useState('');

  const updateName = (e)=> {
    setName(e.target.value)
  };

  const updatePrice = (e)=> {
    setPrice(e.target.value)
  };
  const updateAuthor = (e)=> {
    setAuthor(e.target.value)
  };


  const addBook = e =>{
    e.preventDefault();
    setBooks(prevBooks => [...prevBooks, {Name: name, Price: price, Author: author}]);

  }


  return (
    <>
      <BookWrap>

        <div>
          <h1>All Books List </h1>

          <div>
            <table>
              <thead>
                  <tr>

                  <th>Movie Name</th>
                  <th>Movie Price</th>
                  <th>Movie Author</th>
                </tr>
              </thead>
              
              <tbody>
                {
                  books.map(book =>
                  <tr>
                    <td>{book.Name}</td>
                    <td>{book.Price}</td>
                    <td>{book.Author}</td>
                  </tr>
                  )
                }
                
              </tbody>

            </table>
          </div>

        </div>
        <div>
          <h1>Add New Books Here</h1>
          <form onSubmit={addBook}>
            <input name="name" onChange={updateName} value={name} type="text" placeholder="Book Name" />
            <input name="price" onChange={updatePrice} value={price} type="text" placeholder="Book Price" />
            <input name="author" onChange={updateAuthor} value={author} type="text" placeholder="Author Name" />
            <button>Submit</button>
          </form>
        </div>
      </BookWrap>
    </>
  )
}

export default Books
