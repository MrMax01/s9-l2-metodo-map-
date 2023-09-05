import fantasy from "../data/fantasy.json";
// import history from "../data/history.json";
// import horror from "../data/horror.json";
// import romance from "../data/romance.json";
// import scifi from "../data/scifi.json";

import Card from "react-bootstrap/Card";

// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

function AllTheBooks() {
  return (
    <div className="container d-flex flex-wrap">
      {fantasy.map((elem) => (
        <Card style={{ width: "12rem" }} className="m-2" key={elem.asin}>
          <Card.Img variant="top" className=" h-100 object-fit-cover" src={elem.img} />
          <Card.Body>
            <Card.Title>{elem.title}</Card.Title>
            <Card.Text>{elem.category}</Card.Text>
            <Card.Text>{elem.price}$</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default AllTheBooks;
