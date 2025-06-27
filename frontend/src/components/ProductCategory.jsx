// import { Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

const ProductCategory = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    const category = e.target.value;
    navigate(`/category/${category}`);
  };

  return (
    <div className="category-container">
      <button
        type="button"
        value="electronics"
        className="link-text"
        onClick={handleClick}
      >
        Electronics
      </button>
      <button
        type="button"
        value="fashion"
        className="link-text"
        onClick={handleClick}
      >
        Fashion
      </button>
      <button
        type="button"
        value="food"
        className="link-text"
        onClick={handleClick}
      >
        Food
      </button>
    </div>
  );
};

export default ProductCategory;
