import { useParams } from "react-router-dom";
function Product() {
  let params = useParams;

  return <h1>Estas en el producto...{params.id}</h1>;
}

export default Product;
