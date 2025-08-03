import { Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-0 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" className="fitObject" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div" className="product-title">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Row>
          <Col>
            <Card.Text as="h3">₵{product.price}</Card.Text>
          </Col>
          <Col className="text-end">
            <Link to={`/product/${product._id}`}>
              <Button type="button" className="btn-sm">
                View
              </Button>
            </Link>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Product;
