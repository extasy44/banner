import { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';

import { ShopName, ShopContainer, ProductListContainer } from './Shop.styles';
import Product from './Product';

const GET_SHOP_DETAIL = gql`
  query ShopData {
    shop {
      name
      description
      products(first: 24) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        edges {
          node {
            id
            title
            images(first: 1) {
              edges {
                node {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Shop = ({ setIsLoading }) => {
  const { loading, error, data } = useQuery(GET_SHOP_DETAIL);

  useEffect(() => {
    if (!loading && !error) {
      setIsLoading(false);
    }
  }, [error, loading, setIsLoading]);

  if (loading) return <div>Loading...</div>;
  if (error) return `Error! ${error.message}`;

  return (
    <ShopContainer>
      <ShopName>{data.shop.name}</ShopName>
      <ProductListContainer>
        {data.shop.products.edges.map((product) => (
          <Product key={product.node.id} detail={product} />
        ))}
      </ProductListContainer>
    </ShopContainer>
  );
};

export default Shop;
