import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import Loader from "./Loader";
import Message from "./Message";
import { useGetTopProductsQuery } from "../slices/productsApiSlice";

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Carousel pause="hover" className="bg-primary mb-4">
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Image src={product.image} alt={product.name} fluid />
            <Carousel.Caption className="carousel-caption">
              <h4>
                {product.name} (₵{product.price})
              </h4>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

// const ProductCarousel = () => {
//   // const { data: products, isLoading, error } = useGetTopProductsQuery();

//   return (
//     <Carousel pause="hover" className="bg-primary mb-5">
//       <Carousel.Item>
//         <Image src="/images/1.png" alt="" />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>

//       <Carousel.Item>
//         <Image src="/images/2.png" alt="" />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>

//       <Carousel.Item>
//         <Image src="/images/3.png" alt="" />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// };

export default ProductCarousel;
