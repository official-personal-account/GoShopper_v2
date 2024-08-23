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
            <h2>Why Proshopper?</h2>
            <p>
              *Proshopper* is an easy-to-use digital store, accessible on mobile
              & PC. It is built for businesses that want to have their own
              ecommerce platform, but are confronted with the high cost of
              procuring/maintaning one. With proshopper deployed for you,
              customers can order from your digital store & pay with mobile
              money or card, or select a cash-on-delivery payment option, or
              even complete their order offline.
            </p>
            <h5>If you are a small business owner</h5>
            <p>
              Proshopper saves you time, and allows you to focus on other
              things, whiles still selling. On the digital store, every product
              has the relevant product info. *Proshopper* itself, guides the
              customer through each stage of the order process. As a result,
              there is minimal interaction between you and the customer, before
              or during the order process, allowing you some free time to engage
              in other things{" "}
            </p>

            <h5>Proshopper video demo</h5>
            <p>
              Watch a live recorded video demo of proshopper in the sequence it
              was labelled.
              <br />{" "}
              <span style={{ marginLeft: "15px" }}>
                <a href="https://drive.google.com/file/d/114Mmmp6O12azG-WFZoIIrhP6Pb3eTHzk/view?usp=sharing">
                  Video demo 1
                </a>
              </span>
              <br />
              <span style={{ marginLeft: "15px" }}>
                <a href="https://drive.google.com/file/d/114ix7nW9bWWvrH2sq8MaytOUkkUt3Xgv/view?usp=sharing">
                  Video demo 2
                </a>
              </span>
            </p>

            <h5>Testing & Exploring Proshopper</h5>
            <p>
              Where required to log in, in order to complete an order, use any
              of the emails provided below, or register to create your own. To
              test payment, use the <strong>"Test Pay"</strong> button, as it
              does not trigger actual payment process. The{" "}
              <strong>"Pay Now"</strong> button is a live payment button.
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
            <h2>How to take part in the promo challenge</h2>
            <p>
              To stand a chance to get Proshopper customized & deployed for you,
              for free, you would need to:
            </p>
            <p>1. Like "Innosol Technologies" Facebook page</p>
            <p>
              2. Share the flyer post that has "Proshopper" boldly written on
              it, to your page
            </p>
            <p>
              3. In the comment section:
              <br />
              <span style={{ marginLeft: "15px" }}>
                - State what you would be using the online store to sell
              </span>{" "}
              <br />{" "}
              <span style={{ marginLeft: "15px" }}>
                {" "}
                - Tag your social media business page (if you have one)
              </span>
              <br />{" "}
              <span style={{ marginLeft: "15px" }}>
                {" "}
                - Tag 5 friends you think might need an online store.
              </span>
              <br />
              <span style={{ marginLeft: "15px" }}>
                {" "}
                - Add the last 4 digits of your phone number
              </span>
              <br />
            </p>
            <p>
              <strong>Note:</strong> On the 15th of each month, beginning
              September, for the next 3 months, up to 10 people would be
              selected, and their 4 digit number would be placed in a
              computerized random selector, in a live recorded video session.
              The person with the number selected, gets an online store for
              free!
            </p>
          </Card>
        </Col> */}

        <Col md={6}>
          <Card className="p-4 m-3">
            <h2>Pricing (GHS)</h2>
            <p>
              <strong>1st year: </strong>
              <br />
              <span style={{ marginLeft: "15px" }}>- Monthly payment: 225</span>
              <br />
              <span style={{ marginLeft: "15px" }}>- 1,560/year</span>
            </p>
            <p>
              <strong>After 1st year:</strong>
              <br />{" "}
              <span style={{ marginLeft: "15px" }}>
                - Monthly payment: 225
              </span>{" "}
              <br />{" "}
              <span style={{ marginLeft: "15px" }}>
                - 1 year payment: 2,100
              </span>
              <br />
              <span style={{ marginLeft: "15px" }}>
                - 2 year payment: 3,912
              </span>
              <br />
              <span style={{ marginLeft: "15px" }}>
                - 3 year payment: 5,436
              </span>
              <br />
              <span style={{ marginLeft: "15px" }}>
                - 4 year payment: 6,672
              </span>
              <br />
              <span style={{ marginLeft: "15px" }}>
                - 5 year payment: 7,620
              </span>
            </p>
            <p>
              <strong>Bonus:</strong> Free domain
            </p>
            <p>
              <strong>Digital marketing service:</strong> Innosol also provide
              digital marketing services to help drive traffic from social
              media, Google & across the web, to your online store
            </p>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default InfoScreen;
