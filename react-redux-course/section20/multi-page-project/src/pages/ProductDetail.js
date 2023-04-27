import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const params = useParams();
    const id = params.id;

  return <h1>Product Details #{id}</h1>;
};

export default ProductDetail;
