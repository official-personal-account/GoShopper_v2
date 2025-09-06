import { Link } from "react-router-dom";
import { LuDot } from "react-icons/lu";

const AppBanner = () => {
  return (
    <div
      style={{
        background: "rgba(255, 18, 18)",
        textAlign: "center",
        height: "25px",
      }}
    >
      <p style={{ fontSize: "small", color: "white" }}>
        Customisable to your needs <LuDot /> Secured by Paystack
        <Link
          to="/info"
          style={{ color: "white", textDecorationColor: "white" }}
        >
          <LuDot />
          Learn more
        </Link>
      </p>
    </div>
  );
};

export default AppBanner;
