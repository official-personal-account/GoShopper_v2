import { Link } from "react-router-dom";

const PromotionBanner = () => {
  return (
    <div
      style={{
        background: "rgba(0, 0, 255, 0.3)",
        textAlign: "center",
        height: "25px",
      }}
    >
      <p style={{ fontSize: "small" }}>
        Stand a chance to get Proshopper for free!{" "}
        <Link to="/promotion">
          <span style={{ color: "blue" }}>See how</span>
        </Link>
      </p>
    </div>
  );
};

export default PromotionBanner;
