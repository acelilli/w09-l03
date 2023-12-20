import { Card, Button } from "react-bootstrap";
import { Component } from "react";

class SingleBook extends Component {
  render() {
    const { book } = this.props;

    return (
      <Card key={book.asin} style={{ height: "500px", width: "270px", margin: "auto", marginBottom: "1rem" }}>
        <Card.Img variant="top" src={book.img} alt="Book Cover" className="img-contain" style={{ height: "70%" }} />
        <Card.Body>
          <Card.Title style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {book.title}
          </Card.Title>
          <Card.Text>
            <p>- {book.price}</p>
          </Card.Text>
          <Button variant="primary">Add To cart</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
