import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";
import { IoIosCheckmarkCircle } from "react-icons/io";

const ThankYouScreen = () => {
  return (
    <>
      {/* <Link className="btn btn-secondary my-3 link-text" to={"/"}>
        Go Back
      </Link> */}
      <Card className="text-center m-5">
        {/* <Card.Header>Thanks for the patronage!</Card.Header> */}
        <Card.Body
          style={{
            color: "black",
            borderRadius: "8px",
            // backgroundColor: "#d1e9f6",
            backgroundColor: "#eeedeb",
          }}
        >
          <Card.Title>
            <h1>Thanks for the patronage!</h1>
          </Card.Title>
          <IoIosCheckmarkCircle size={106} color="#6eacda" />
          <Card.Text>
            Your order is being processed to be delivered to you.
          </Card.Text>
          <Link to={"/"}>
            <Button variant="primary" className="link-text">
              Go Back
            </Button>
          </Link>
        </Card.Body>
        {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
      </Card>
    </>
  );
};

export default ThankYouScreen;
