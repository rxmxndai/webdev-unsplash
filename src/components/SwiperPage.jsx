import styled from "styled-components"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css/autoplay";
import ImageList from "./ImageList";
import { data } from "../data/data";

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
  border: rgba(0, 0, 0, 0.1) 0px 10px 50px;
`

const Title = styled.h2`
  color: #555;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
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
`



const SwiperPage = () => {
  return (
    <Container>

      <Title> My Images </Title>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={80}
        slidesPerView={3}
        navigation
        // pagination={{ clickable: true }}
        autoplay={{ delay: 1000 }}
        loop={true}
        grabCursor
      >
        {data.map(imageData => (
          <SwiperSlide key={imageData.id} >
            <Wrapper >
              <ImageContainer>
                <Image src={imageData.image} />
              </ImageContainer>
              <Info> {imageData.title} </Info>
            </Wrapper>
          </SwiperSlide>
        ))}

      </Swiper>

      <Title> Featured Images </Title>

        <ImageList data={data} />


    </Container>
  )
}

export default SwiperPage