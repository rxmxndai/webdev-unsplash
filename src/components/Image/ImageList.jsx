import styled from "styled-components"
import { useEffect } from "react"
import ImageCard from "./ImageCard"
import { device } from "../../Media"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 50px;
  @media ${device.mobile} {
    padding: 0px 20px;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`



const ImageList = ({ data, found=true }) => {

  useEffect(() => {
    if (!Array.isArray(data) || data.length <=0 ) {
      console.log("Invalid data passed!");
    }
    return;
  }, [data])

  return (
    <Container>
      {
        found &&
          <Wrapper>
            {data?.map(obj => (
              <div key={obj.id}>
                <ImageCard data={obj} />
              </div>
            ))}
          </Wrapper>
      }
    </Container>
  )
}

export default ImageList