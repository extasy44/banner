import styled, { css } from 'styled-components';

const getMarginLeft = ({ marginLeft }) => {
  if (marginLeft) {
    return css`
      margin-left: ${marginLeft}px;
    `;
  }
  return;
};

export const BannerContainer = styled.div`
  background-color: #000;
  color: white;
  width: 100%;
  min-height: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;

export const BannerContents = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 2em;
  padding: 10px;
  @media screen and (max-width: 768px) {
    margin: 1em;
    align-items: center;
  }
`;

export const BannerText = styled.div`
  font-size: 2.5em;
  @media screen and (max-width: 768px) {
    margin: 15px;
  }
`;

export const BannerSmallText = styled.div`
  font-size: 1.2em;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 15px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  cursor: pointer;
  ${getMarginLeft}
  &:hover {
    background-color: #a9a9a9;
    color: white;
    border: none;
  }

  @media screen and (max-width: 768px) {
    margin-left: 0px;
  }
`;
