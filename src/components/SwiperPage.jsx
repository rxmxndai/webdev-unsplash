import styled from "styled-components"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css/autoplay";

import { useEffect, useState } from "react";
import { getAllMyImages, removeFromStorage } from "../apicalls/imageCall";
import { device } from "../Media";



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
  display: flex;
  align-items: center;
  justify-content: center;
`

const Image = styled.img`
  height: 80%;
  width: 80%;
  object-fit: contain;
  height: 300px;
  user-select: none;
`

const Info = styled.a`  
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

const P = styled.p`
  display: none;
  color: blueviolet;
  font-size: small;

  @media ${device.mobile} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`


const SwiperPage = () => {


  const [slidesPerView, setSlidesPerView] = useState(
    window.matchMedia(device.mobile).matches ? 1 : 3
  );

  const [data, setData] = useState([])
  const [update, setUpdate] = useState(false);

  // fetch created images from local storage 
  useEffect(() => {
    const getData = () => {
      const result = getAllMyImages();
      result.reverse();
      setData(result);
    }

    getData();
  }, [update])



  // Check for window resolutiona and set slides per view for responsive UI 
  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.matchMedia(device.mobile).matches ? 1 : 3);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <Container>

      {Array.isArray(data) && data.length > 0
        ?
        <>
          <Title> My Images </Title>

          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={slidesPerView}
            navigation={ slidesPerView === 1 ? false : true }
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
          <P > { `<< Swipe >>` } </P>
        </>

        :
        ""
      }
    </Container>
  )
}

export default SwiperPage