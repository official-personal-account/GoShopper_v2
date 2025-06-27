import { Row, Col } from "react-bootstrap";
import { Link, useParams, useLocation } from "react-router-dom";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
// import ProductCarousel from "../components/ProductCarousel";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import ProductCarousel from "../components/ProductCarousel";
import Meta from "../components/Meta";
import ProductCategory from "../components/ProductCategory";

const HomeScreen = () => {
  const { keyword, pageNumber, category } = useParams();
  // console.log(category);

  const url = useLocation();

  const { data, isLoading, error } = useGetProductsQuery({
    category,
    keyword,
    pageNumber,
  });

  // console.log(data);

  return (
    <>
      {!keyword ? (
        <>
          {/* <h1>Top Products</h1> */}
          <ProductCarousel />
        </>
      ) : (
        <Link to="/" className="btn btn-secondary mb-4 link-text">
          Go Back
        </Link>
      )}
      {/* {keyword && (
        <Link to="/" className="btn btn-secondary mb-4 link-text">
          Go Back
        </Link>
      )} */}
      {isLoading ? (
        <h2>
          <Loader /> Loading...
        </h2>
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Meta />
          <ProductCategory />
          <h1>Latest Products</h1>
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          Page{" "}
          <Paginate
            pages={data.pages}
            page={data.page}
            url={url}
            keyword={keyword ? keyword : ""}
            category={category ? category : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
