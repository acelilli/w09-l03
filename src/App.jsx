import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import { Container, Row } from "react-bootstrap";
import Welcome from "./components/Welcome";

import Fantasy from "./books/fantasy.json";
import Horror from "./books/horror.json";
import Romance from "./books/romance.json";
import HistoryBooks from "./books/history.json";
import Scifi from "./books/scifi.json";
import BookList from "./components/BookList";
//import specifico da un import globale => condensato linee sotto in quella sopra
// import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
//NB: se volessi creare la navbar attraverso un component NON posso chimarla Navbar a causa del conflitto con boostrap
import MyFooter from "./components/MyFooter";

// import AllTheBooks from "./components/AllTheBooks";

const booksArray = [
  { genre: "Fantasy", books: Fantasy },
  { genre: "Horror", books: Horror },
  { genre: "Romance", books: Romance },
  { genre: "HistoryBooks", books: HistoryBooks },
  { genre: "Scifi", books: Scifi },
];

function App() {
  return (
    <div className="App">
      <MyNav brand="EpiBooks" claim="Week 09 Lesson 03" />
      <Welcome />
      {/* <AllTheBooks /> */}
      {/* AllTheBooks è diventato la struttura container/row che contiene a sua volta BookList che contiene a sua volta SingleBook. */}
      <Container>
        <Row className="justify-content-md-center p-auto">
          <BookList books={booksArray} />
        </Row>
      </Container>
      <MyFooter
        content1={
          <ul>
            <li>Policy</li>
            <li>Termini di servizio</li>
            <li>Contatti</li>
          </ul>
        }
        content2={
          <ul>
            <li>Testo col 2</li>
            <li>Testo col 2</li>
            <li>Testo col 2</li>
          </ul>
        }
        content3={
          <ul>
            <li>Testo col 3</li>
            <li>Testo col 3</li>
            <li>Testo col 3</li>
          </ul>
        }
      />
    </div>
  );
}

export default App;
