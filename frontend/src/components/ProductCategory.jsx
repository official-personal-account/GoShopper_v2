// import { Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

const ProductCategory = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    const category = e.target.value;
    navigate(`/category/${category}`);
  };

  // const handleAllProductsClick = () => {
  //   navigate("/");
  // };

  return (
    <div className="product-category-container">
      {/* <button
        type="button"
        value="all-products"
        className="link-text category-button"
        onClick={handleAllProductsClick}
      >
        All Products
      </button> */}
      <button
        type="button"
        value="electronics"
        className="link-text category-button"
        onClick={handleClick}
      >
        Electronics
      </button>
      <button
        type="button"
        value="fashion"
        className="link-text category-button"
        onClick={handleClick}
      >
        Fashion
      </button>
      <button
        type="button"
        value="food"
        className="link-text category-button"
        onClick={handleClick}
      >
        Food
      </button>

      {/* <Button
        type="button"
        value="electronics"
        className="btn btn-secondary p-2 mx-2 link-text"
        onClick={handleClick}
      >
        Electronics
      </Button>
      <Button
        type="button"
        value="food"
        className="btn btn-secondary p-2 mx-2 link-text"
        onClick={handleClick}
      >
        Food
      </Button>
      <Button
        type="button"
        value="fashion"
        className="btn btn-secondary p-2 mx-2 link-text"
        onClick={handleClick}
      >
        Fashion
      </Button> */}
    </div>
  );
};

export default ProductCategory;
