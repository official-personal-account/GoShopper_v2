import { Link } from "react-router-dom";
import { LuDot } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";

const AppBanner = () => {
  return (
    <div
      style={{
        background: "rgba(255, 18, 18)",
        textAlign: "center",
        height: "30px",
        padding: "2px",
      }}
    >
      <p style={{ fontSize: "small", color: "white", display: "inline-block" }}>
        Customisable <LuDot /> Easy to use
      </p>{" "}
      <Link
        to="/info"
        style={{
          color: "white",
          textDecorationColor: "white",
          textDecoration: "none",
          fontSize: "small",
          // float: "right",
          marginLeft: "25px",
          letterSpacing: "1px",
        }}
        className="twinkling-element"
      >
        Learn more <FaArrowRightLong />
      </Link>
    </div>
  );
};

export default AppBanner;
