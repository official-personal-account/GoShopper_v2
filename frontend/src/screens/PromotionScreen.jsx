import { Link } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";

const PromotionScreen = () => {
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
              *Proshopper* is easy to use & fully customizable. It is developed
              for businesses that want to have their own ecommerce platform.
              With proshopper, customers can order & pay with mobile money or
              card. Because every product on your online store has the relevant
              product info & *Proshopper* itself guides the customer through the
              order process, there is minimal interaction between you and the
              customer, before or during the order process. This saves you time,
              and allows you to focus on other things, whiles still selling.{" "}
            </p>
            <p>
              Watch a live recorded video demo below, in the sequence it was
              labelled, or explore Proshopper by yourself. Where required to log
              in, in order to complete an order, use any of the emails provided
              below or register to create your own.
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
              <strong>Password: </strong>123456
              <br />
              <strong>Video Demo:</strong>
              <br />{" "}
              <span style={{ marginLeft: "15px" }}>
                <a href="https://drive.google.com/file/d/1-lKKZ3BRwpVb_6fzMR-r0I8p3AF3MYBT/view?usp=drive_link">
                  Video 1
                </a>
              </span>
              <br />
              <span style={{ marginLeft: "15px" }}>
                <a href="https://drive.google.com/file/d/1-qUgbeEESHoboU37ZM4Ozx4vvPQN78W4/view?usp=drive_link">
                  Video 2
                </a>
              </span>
            </p>
          </Card>
        </Col>

        <Col md={6}>
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
        </Col>

        <Col md={6}>
          <Card className="p-4 m-3">
            <h2>Pricing (GHS)</h2>
            <p>
              <span style={{ marginLeft: "15px" }}>- Monthly payment: 225</span>{" "}
              <br />{" "}
              <span style={{ marginLeft: "15px" }}>
                - 1 year payment: 175/mo
              </span>
              <br />
              <span style={{ marginLeft: "15px" }}>
                - 2 year payment: 163/mo
              </span>
              <br />
              <span style={{ marginLeft: "15px" }}>
                - 3 year payment: 151/mo
              </span>
              <br />
              <span style={{ marginLeft: "15px" }}>
                - 4 year payment: 139/mo
              </span>
              <br />
              <span style={{ marginLeft: "15px" }}>
                - 5 year payment: 127/mo
              </span>
            </p>
            <p>
              <strong>Bonus:</strong> Free domain + 1 month free digital ad
              service to help drive traffic from social media, Google & across
              the web, to your online store
            </p>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PromotionScreen;
