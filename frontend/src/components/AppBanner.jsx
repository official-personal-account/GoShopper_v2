import { Link } from "react-router-dom";

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
        Customisable to your needs. {""}
        <Link
          to="/info"
          style={{ color: "white", textDecorationColor: "white" }}
        >
          Learn more about GoShopper.
        </Link>
      </p>
    </div>
  );
};

export default AppBanner;
