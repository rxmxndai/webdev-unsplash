import styled from "styled-components"
import SwiperPage from "../components/SwiperPage"
import ImageList from "../components/Image/ImageList"
import { getSomeImages } from "../apicalls/imageCall"
import { useEffect, useState } from "react"
import { device } from "../Media"

const Container = styled.div`
  
`

const Wrapper = styled.div`

`

const Title = styled.h2`
  color: #555;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0px 20px 0px; 

  @media ${device.mobile} {
      font-size: 20px;
  }
`


const Homepage = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const images = await getSomeImages({ query: "computer", page: 1, perPage: 14 });
      setData(images)
    }

    getData();
  }, [])

  return (
    <Container>
      <Wrapper>
        <SwiperPage />
        <Title> Featured Images from Unsplash </Title>
        { data && <ImageList data={data} /> }
      </Wrapper>
    </Container>
  )
}

export default Homepage