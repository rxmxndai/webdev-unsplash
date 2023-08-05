import styled from "styled-components"
import ImageCard from "./ImageCard"
import { useEffect, useState } from "react"
import { getSomeImages } from "../apicalls/imageCall"

const Container = styled.div`
  margin: 20px 50px;
  height: 30vh;
  display: flex;
  flex-wrap: wrap;
`



const ImageList = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async ( ) => {
      const images = await getSomeImages({query: "anime", perPage: 14});
      setData(images)
    }

    getData();
  }, [])


  return (
    <Container>
      {
        data.length > 0 && data?.map(obj => (
          <div key={obj.id}>
            <ImageCard data={obj} />
          </div>
        ))
      }
    </Container>
  )
}

export default ImageList