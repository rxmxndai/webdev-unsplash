import styled from "styled-components"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css/autoplay";
import ImageList from "./ImageList";
import { useEffect, useState } from "react";
import { getAllMyImages, removeFromStorage } from "../apicalls/imageCall";

// box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;


const Container = styled.div`
  padding: 0px 50px;
  height: 100%;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid transparent;
  transition: transform 0.3s ease;
  border-radius: 10px;
  position: relative;

  &:hover {
   
    border: 1px solid #111;
  }
`

const Title = styled.h2`
  color: #555;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0px 20px 0px; 
`


const ImageContainer = styled.div`
  flex: 1;
  overflow: hidden;
`

const Image = styled.img`
  height: 80%;
  width: 80%;
  object-fit: contain;
  height: 300px;
  user-select: none;
`

const Info = styled.h3`
user-select: none;
`
const Button = styled.button`
  padding: 10px;
  background: transparent;
  color: red;
  cursor: pointer;
  border: none;
  position: absolute;
  top: 0;
  width: 100%;
  opacity: 0%;
  border-radius: 10px 10px 0px 0px;

  &:hover {
    opacity: 100%;
    background-color: red;
    color: white;
  }
`


const SwiperPage = () => {

  const [data, setData] = useState([])
  const [update, setUpdate] = useState(false);

  // fetch created images from local storage 
  useEffect(() => {
    const getData = () => {
      const result = getAllMyImages();
      setData(result);
    }

    getData();
  }, [update])


  return (
    <Container>

      {Array.isArray(data) && data.length > 0
        ?
        <>
          <Title> My Images </Title>

          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={4}
            navigation
            autoplay={{ delay: 100 }}
          // grabCursor
          >
            {data.map(imageData => (
              <SwiperSlide key={imageData.id} >
                <Wrapper >
                  <Button onClick={() => {
                    const result = removeFromStorage(imageData.id)
                    if (result) setUpdate(!update);
                  }} > Delete </Button>
                  <ImageContainer>
                    <Image src={imageData.image} />
                  </ImageContainer>
                  <Info> {imageData.title} </Info>
                </Wrapper>
              </SwiperSlide>
            ))}

          </Swiper>
        </>

        :
        ""
      }

      <Title> Featured Images from Unsplash </Title>

      <ImageList />


    </Container>
  )
}

export default SwiperPage