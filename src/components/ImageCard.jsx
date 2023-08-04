import styled from "styled-components";

const Container = styled.div`
  width: 200px;
  height: 300px;
  padding: 10px;
  background-color: #ffffff;
  display: flex;
  border-radius: 2px;
  margin: 20px 10px;

  &:hover {
    transform: translate(2);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
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
  transform: scale(0.8);
  border-radius: 2px;

  &:hover {
    transform: scale(1);
  }
`;


const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  margin: 10px;
`;





const ImageCard = ({ data }) => {
  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <Image
            src={data?.image}
          />
        </ImageContainer>

        <Title> {data.title} </Title>
      </Wrapper>

    </Container>
  )
}

export default ImageCard