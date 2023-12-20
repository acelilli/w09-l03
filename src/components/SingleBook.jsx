import React, { Component } from "react";
import { Col, Card, Button } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    const { book } = this.props;

    return (
      <Col sm={12} md={6} lg={3}>
        <Card
          key={book.asin}
          style={{
            height: "500px",
            width: "270px",
            margin: "auto",
            marginBottom: "1rem",
            border: this.state.selected ? "2px solid red" : "2px solid rgba(0, 0, 0, 0.175)",
          }}
        >
          <Card.Img
            variant="top"
            src={book.img}
            alt="Book Cover"
            className="img-contain"
            style={{
              height: "70%",
              border: "2px solid grainsporo",
            }}
          />
          <Card.Body>
            <Card.Title style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {book.title}
            </Card.Title>
            <Card.Text>
              <p>- {book.price}</p>
            </Card.Text>
            <Button variant="primary" onClick={() => this.setState({ selected: !this.state.selected })}>
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
