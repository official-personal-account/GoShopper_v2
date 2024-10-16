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
              *Proshopper* is an ecommerce platform that can be customized to
              your needs:
            </p>
            <p>
              <span style={{}}>
                - Allows customers to order & pay you with mobile money or card
                from anywhere
              </span>
              <br />
              <span style={{}}>
                - Has a cash-on-delivery payment option feature
              </span>
              <br />
              <span style={{}}>- Easy to use & accessible on mobile & PC</span>
              <br />
              <span style={{}}>- or even complete their order offline</span>
            </p>

            <br />
            <h5>If you are a small business owner</h5>
            <p>
              Proshopper saves you time, and allows you to focus on other
              things, whiles still selling. On the digital store, every product
              has the relevant product info. *Proshopper* itself, guides the
              customer through each stage of the order process. As a result,
              there is minimal interaction between you and the customer, before
              or during the order process, allowing you some free time to engage
              in other things.
            </p>

            <br />
            <h5>Proshopper video demo</h5>
            <p>
              Watch a live recorded video demo of how proshopper works. Start
              with demo 1.
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

            <br />
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
              {/* <span style={{ }}>- Monthly payment: 225</span>
              <br /> */}
              <span style={{}}>- 1 year: 2,100</span>
              <br />
              <span style={{}}>- 2 years: 3,912</span>
              <br />
              <span style={{}}>- 3 years: 5,436</span>
              <br />
              <span style={{}}>- 4 years: 6,672</span>
              <br />
              <span style={{}}>- 5 years: 7,620</span>
            </p>
            <p>
              <strong>Note: </strong>Installment payment arrangement is
              available for all pricing plans, to allow you pay as low as Ghs250
              monthly, till you have paid the full plan price.
            </p>
            <p>
              <strong>Bonus:</strong>
              <br />
              <span style={{}}>- Free domain</span>
              <br />
              <span style={{}}>
                - 1 month free digital marketing service: showcases your
                business/product ads on social media, in websites, in apps, or
                on Youtube. People who see your business/product ad and
                tap/click on it, are directed to your digital store, helping you
                drive traffic from across the web, to your digital store
              </span>
            </p>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default InfoScreen;
