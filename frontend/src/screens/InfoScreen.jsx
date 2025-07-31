import { Link } from "react-router-dom";
import { Button, Row, Col, Card } from "react-bootstrap";

const InfoScreen = () => {
  return (
    <>
      <Link className="btn btn-secondary my-3" to={"/"}>
        View Goshopper
      </Link>
      <Row>
        <Col md={6}>
          <Card className="p-4 m-3">
            <h2>Why Goshopper?</h2>
            <p>
              Goshopper is an ecommerce application (website) that can be
              deployed for food, clothing & product vendors looking to have
              their own ecommerce website:
            </p>
            <p>
              <span style={{}}>
                <strong>✔</strong> Allows customers to order & pay with mobile
                money or card, or select a cash-on-delivery payment option.
              </span>
              <br />
              <span style={{}}>
                <strong>✔</strong> Secured by{" "}
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
                <strong>✔</strong> You get a message notification in real time,
                when an order is made.
              </span>
              <br />
              <span style={{}}>
                <strong>✔</strong> Easy to use & accessible on mobile & PC.
              </span>
              <br />
              <span style={{}}>
                <strong>✔</strong> Customisable to your needs
              </span>
            </p>

            <br />
            <h5>If you are a small business owner</h5>
            <p>
              Goshopper saves you time, and allows you to focus on other things,
              whiles still selling. On Goshopper, every product has the relevant
              product info. Goshopper itself, guides the user through each stage
              of the order process. As a result, there is minimal interaction
              between you and the customer, before or during the order process,
              allowing you some free time to engage in other things.
            </p>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="p-4 m-3">
            <h5>Testing & Exploring Goshopper</h5>
            <p>
              Use any of the credentials below to sign in & explore how the
              system works.
              <br />
              <strong>Ordinary user:</strong>
              <br />
              <span style={{ marginLeft: "15px" }}>- jane@email.com</span>{" "}
              <br />{" "}
              <span style={{ marginLeft: "15px" }}> - john@email.com</span>
              <br />
              <span style={{ marginLeft: "15px" }}>
                {" "}
                - jbrown@email.com
              </span>{" "}
              <br />
              <strong>Admin user:</strong>
              <br />
              <span style={{ marginLeft: "15px" }}>- admin@email.com</span>{" "}
              <br />{" "}
              <span style={{ marginLeft: "15px" }}> - myadmin@email.com</span>
              <br />
              <strong>Password: </strong>testuser123
              <br />
            </p>
          </Card>
        </Col>

        {/* <Col md={6}>
          <Card className="p-4 m-3">
            <h2>Price (GHS)</h2>
            <p>
              Contact: <strong>+233-27-2083-116</strong>
            </p>

            <p>
              <strong>Bonus:</strong>
              <br />
              <span style={{}}>- Free domain name</span>
              <br />
              <span style={{}}>
                - One month free digital marketing service, to help drive
                traffic from across the web to your ecommerce website. See{" "}
                <a href="https://innosoltechgh.com/pricing" target="__blank">
                  digital marketing rates
                </a>
                . See some digital marketing video demos on how traffic is
                driven to your website:
              </span>
              <br />
              <span style={{ marginLeft: "15px" }}>
                <a href="https://www.facebook.com/www.innosoltechnologies.com.gh/videos/503106595999036/?mibextid=a5VnDUpeP1iQ3q3p">
                  Video demo 1
                </a>
              </span>
              <br />
              <span style={{ marginLeft: "15px" }}>
                <a href="https://drive.google.com/file/d/1AGgxAPEo4-ep1u9mofcJBwAJLxRo9goo/view?usp=drivesdk">
                  Video demo 2
                </a>
              </span>
            </p>
          </Card>
        </Col> */}
      </Row>
    </>
  );
};

export default InfoScreen;
