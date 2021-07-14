import React, {useContext} from 'react'
import BookWrap from '../Styles/Books';
import {BookContext} from './BookContext';

const Books = () => {
  const [books, setBooks] = useContext(BookContext)
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
          <form>
            <input type="text" placeholder="Book Name" />
            <input type="text" placeholder="Book Price" />
            <input type="text" placeholder="Author Name" />
            <button>Submit</button>
          </form>
        </div>
      </BookWrap>
    </>
  )
}

export default Books
