import Header from './Components/Header';
import Books from './Components/Books';
import GlobalStyle from './Styles/GlobalStyle'
import {BookProvider} from './Components/BookContext'
function App() {
  return (
    <>
      <BookProvider>
        <GlobalStyle />
        <Header />
        <Books />
      </BookProvider>
    </>
  );
}

export default App;
