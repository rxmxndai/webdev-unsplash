import styled from "styled-components";
import { device } from "../../Media";

const Container = styled.div`
  width: 200px;
  height: 300px;
  padding: 10px;
  background-color: #ffffff;
  display: flex;
  border-radius: 2px;
  margin: 20px 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  &:hover {
    transform: translate(2);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }


  @media ${device.mobile} {
    height: 200px;
    width: 130px;
  }
`;


const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  background-color: #ffffff;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #ffffff;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  cursor: pointer;
  transition: transform 0.3s ease;
  transform: scale(0.9);
  border-radius: 2px;

  &:hover {
    transform: scale(1);
  }
`;


const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  margin: 10px;

  @media ${device.mobile} {
    font-size: 12px;
    font-weight: 400;
    margin: 5px;
  }

`;





const ImageCard = ({ data }) => {
  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <Image
            alt={data.alt_description}
            src={data?.urls.regular}
          />
        </ImageContainer>

        <Title> {data.alt_description.slice(0, 35) + "..."} </Title>
      </Wrapper>

    </Container>
  )
}

export default ImageCard