import { Link } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";

const InfoScreen = () => {
  return (
    <>
      <Link className="btn btn-secondary my-3" to={"/"}>
        View Proshopper
      </Link>
      <Row>
        <Col md={6}>
          <Card className="p-4 m-3">
            <h2>Proshopper Video Demo</h2>
            <p>
              Watch a live recorded video demo of how proshopper works.
              <br />{" "}
              <span style={{ marginLeft: "15px" }}>
                <a href="https://drive.google.com/file/d/1b2c-tiFIhsJIxi4kPwplUeNdYU7cwz5N/view?usp=drivesdk">
                  Video demo 1
                </a>
              </span>
            </p>

            <br />

            <h2>Why Proshopper?</h2>
            <p>
              Proshopper is an ecommerce application (website) that can be
              deployed for food, clothing & product vendors looking to have
              their own ecommerce website:
            </p>
            <p>
              <span style={{}}>
                <strong>✔</strong> Allows customers to order & pay with mobile
                money or card, from anywhere, or select a cash-on-delivery
                payment option.
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
                <strong>✔</strong> You get notified in real time when payment is
                made.
              </span>
              <br />
              <span style={{}}>
                <strong>✔</strong> Easy to use & accessible on mobile & PC.
              </span>
              <br />
              <span style={{}}>
                <strong>✔</strong> Installable as a desktop or mobile app.
              </span>
              <br />
              <span style={{}}>
                <strong>✔</strong> Customisable to your needs
              </span>
            </p>

            <br />
            <h5>If you are a small business owner</h5>
            <p>
              Proshopper saves you time, and allows you to focus on other
              things, whiles still selling. On Proshopper, every product has the
              relevant product info. Proshopper itself, guides the user through
              each stage of the order process. As a result, there is minimal
              interaction between you and the customer, before or during the
              order process, allowing you some free time to engage in other
              things.
            </p>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="p-4 m-3">
            <h5>Testing & Exploring Proshopper</h5>
            <p>
              Use any of the credentials below to sign in & explore how the
              system works, where sign-in is required.
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

        <Col md={6}>
          <Card className="p-4 m-3">
            <h2>Price (GHS)</h2>
            <p>
              Call/WhatsApp for price:{" "}
              <a href="tel:+233272083116">027-2083-116</a>
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
        </Col>
      </Row>
    </>
  );
};

export default InfoScreen;
