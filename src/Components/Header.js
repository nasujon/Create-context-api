import React, {useContext} from 'react';
import HeaderStyles from '../Styles/Header';
import { BookContext } from './BookContext';


const Header = () => {

  const [books, setBooks] = useContext(BookContext);

  return (
    <>
      <HeaderStyles>
        <div className="head-content">
          <h1>Personal Libery</h1>
        </div>
        <div className="head-content">
          <h1>Total Books: {books.length} </h1>
        </div>
      </HeaderStyles>
    </>
  )
}

export default Header
