import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#42080e",
        borderRadius: "10px 10px 0 0",
        color: "white",
      }}
    >
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>GoShopper &copy; {currentYear}</p>
            <p style={{ color: "", fontSize: "small" }}>
              Customisable to your needs{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
