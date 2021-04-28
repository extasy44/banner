import styled from 'styled-components';

export const ProductContainer = styled.div`
  flex: 1 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  border: 1px solid #6e6e6e;
  margin: 5px;
  padding: 10px;
  &:hover {
    .image {
      opacity: 0.8;
      transition: all 0.8s;
    }
  }

  @media screen and (max-width: 768px) {
    flex: 1 45%;
  }
`;

export const ProductImage = styled.div`
  max-width: 100%;
  height: 80%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const ProductInfo = styled.div`
  margin-top: auto;
`;
