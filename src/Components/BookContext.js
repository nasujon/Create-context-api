import React, {useState, createContext} from 'react';

export const BookContext = createContext();

export const BookProvider = (props) =>{

  const [books, setBooks] = useState([
    {
      Name: "Harry potter",
      Price: "4243",
      Author: "haryyd"
    },
    {
      Name: "Game of trons",
      Price: "34",
      Author: "ahadf"
    },
    {
      Name: "Emoji",
      Price: "334",
      Author: "eourbhf"
    }

  ])


  return(
    <>
      <BookContext.Provider value={[books, setBooks]}>
        {props.children}
      </BookContext.Provider>
    </>
  );
}
