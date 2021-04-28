import { ProductContainer, ProductImage, ProductInfo } from './Product.styles';

const Product = ({ detail }) => {
  return (
    <ProductContainer>
      <ProductImage
        className="image"
        imageUrl={detail.node.images.edges[0].node.src}
      />
      <ProductInfo>
        <h5>{detail.node.title}</h5>
      </ProductInfo>
    </ProductContainer>
  );
};

export default Product;
