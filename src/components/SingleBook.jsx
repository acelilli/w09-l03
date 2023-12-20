import { Col, Card, Button } from "react-bootstrap";
import { Component } from "react";

class SingleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    }; // Il costruttore traccia se un libro è selezionato o no (partendo da false?)
  }

  handleToggleSelected = () => {
    // Toggle per togliere/mettere la selezione, vero e proprio METODO e SETTA uno STATO previously
    this.setState({
      selected: !this.state.selected,
    });
  };

  render() {
    const { book } = this.props;
    const { selected } = this.state;

    return (
      <Col sm={12} md={6} lg={3}>
        <Card
          key={book.asin}
          style={{
            height: "500px",
            width: "270px",
            margin: "auto",
            marginBottom: "1rem",
            border: selected ? "2px solid red" : "2px solid grainsboro", // ? => ternary operator o conditional operator: condizione ? espressione_se_vera : espressione_se_falsa; tipo if/else
          }}
        >
          <Card.Img
            variant="top"
            src={book.img}
            alt="Book Cover"
            className="img-contain"
            style={{ height: "70%" }}
          />
          <Card.Body>
            <Card.Title style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {book.title}
            </Card.Title>
            <Card.Text>
              <p>- {book.price}</p>
            </Card.Text>
            <Button variant="primary" onClick={this.handleToggleSelected}>
              Select
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;

// Quando era una funzione:
// class SingleBook extends Component {
//   render() {
//     const { book } = this.props;

//     return (
//       <Col sm={12} md={6} lg={3}>
//         <Card key={book.asin} style={{ height: "500px", width: "270px", margin: "auto", marginBottom: "1rem" }}>
//           <Card.Img
//             variant="top"
//             src={book.img}
//             alt="Book Cover"
//             className="img-contain"
//             style={{ height: "70%" }}
//           />
//           <Card.Body>
//             <Card.Title style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
//               {book.title}
//             </Card.Title>
//             <Card.Text>
//               <p>- {book.price}</p>
//             </Card.Text>
//             <Button variant="primary">Add To cart</Button>
//           </Card.Body>
//         </Card>
//       </Col>
//     );
//   }
// }

// export default SingleBook;
