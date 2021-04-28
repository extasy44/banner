import {
  BannerContainer,
  ButtonContainer,
  StyledButton,
  BannerContents,
  BannerText,
  BannerSmallText,
} from './Banner.styles';

const Banner = ({ isLoading, setIsLoading, setIsShopOpen }) => {
  const handleClick = () => {
    setIsLoading(true);
    setIsShopOpen(true);
  };

  return (
    <BannerContainer>
      <BannerContents>
        <BannerText>We Are Digital Test Store!!</BannerText>
        <BannerSmallText>Click button to load products</BannerSmallText>

        <ButtonContainer>
          <StyledButton onClick={handleClick}>Click Me</StyledButton>
          <StyledButton marginLeft={20}>
            {isLoading ? 'Loading..' : 'Hello'}
          </StyledButton>
        </ButtonContainer>
      </BannerContents>
    </BannerContainer>
  );
};

export default Banner;
