import { Link } from "react-router-dom";
import { Button, Row, Col, Card } from "react-bootstrap";
import { GrStatusGood } from "react-icons/gr";

const InfoScreen = () => {
  return (
    <>
      <Link className="btn btn-secondary my-3" to={"/"}>
        View Goshopper
      </Link>
      <Row>
        <Col md={6}>
          <h2>Why Goshopper?</h2>
          <p>
            Goshopper is an ecommerce application (website) that can be deployed
            for food, clothing & product vendors looking to have their own
            ecommerce website:
          </p>
          <p>
            <span style={{}}>
              <GrStatusGood style={{ color: "green" }} /> Allows customers to
              order & pay with mobile money or card, or select a
              cash-on-delivery payment option.
            </span>
            <br />
            <span style={{}}>
              <GrStatusGood style={{ color: "green" }} /> Secured by{" "}
              <a href="https://paystack.com" target="__blank">
                Paystack
              </a>
              , one of Africa's leading fintech and a subsidiary of{" "}
              <a href="https://stripe.com" target="__blank">
                Stripe
              </a>{" "}
              (a leading Global fintech used by Amazon, Google, WhatsApp,
              Marriot & more).
            </span>
            <br />
            <span style={{}}>
              <GrStatusGood style={{ color: "green" }} /> You get an instant
              notification when payment is made.
            </span>
            <br />
            <span style={{}}>
              <GrStatusGood style={{ color: "green" }} /> Easy to use &
              accessible on mobile & PC.
            </span>
            <br />
            <span style={{}}>
              <GrStatusGood style={{ color: "green" }} /> Customisable to your
              needs
            </span>
          </p>

          <br />
        </Col>
        <Col md={6}>
          <h5>If you are a small business owner</h5>
          <p>
            Goshopper saves you time, and allows you to focus on other things,
            whiles still selling. On Goshopper, every product has the relevant
            product info. Goshopper itself, guides the user through each stage
            of the order process. As a result, there is minimal interaction
            between you and the customer, before or during the order process,
            allowing you some free time to engage in other things.
          </p>
        </Col>
      </Row>
    </>
  );
};

export default InfoScreen;
