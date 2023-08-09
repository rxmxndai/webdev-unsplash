import styled from "styled-components"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageList from "../components/Image/ImageList";
import { getSomeImages } from "../apicalls/imageCall";
import AlertBox from "../components/AlertBox";

const Container = styled.div`
  padding: 10px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Wrap = styled.div`
  position: relative;
`

const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 30px;
`

const Button = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  outline: none;
  border: none;
  background-color: ${props => props.disabled ? "transparent" : '#318CE7'};
  color: ${props => props.disabled ? "#555" : 'white'};
`

const PageNow = styled.input`
  padding: 10px;
  width: 20px;
  height: 20px;
  border: 1px solid blue;
  border-radius: 0;
  font-size: 16px;
  outline: none;
`



const SearchPage = () => {

  const query = useParams().query;

  const [page, setPage] = useState(1);

  const [data, setData] = useState([]);

  const [totalImages, setTotalImages] = useState(0);




  // fetch new data on every new search-query
  useEffect(() => {
    const getData = async () => {
        const { totalImages, images } = await getSomeImages({ query, page, perPage: 14 });
        if (images.length <= 0) {
          return;
        }
        setData(images)
        setTotalImages(totalImages);
    }

    getData();
  }, [query, page])


  // pagination button controls
  const handlePagination = (update) => {
    if (update === "prev" && (page - 1) > 0) {
      setPage(page - 1);
    }
    else if (update === "next" && !( page+1 > 10 )) {
      setPage(page + 1);
    }
  }

  return (
    <Container>
        {
          data.length < 0 ?
          <>
          <ImageList data={data}  />
          <Wrap>
            <Filter>
              <Button
                disabled={page === 1 ? true : false}
                onClick={() => handlePagination("prev")} > Prev </Button>
              <PageNow disabled value={page} onChange={(e) => {
                if (e.target.value < 11) {
                  setPage(e.target.value)
                }
                else {
                  setPage(10)
                }
              }} />
              <Button
                disabled={totalImages < (14 * page) || page === 10 ? true : false}
                onClick={() => handlePagination("next")} > Next </Button>
            </Filter>
          </Wrap>
        </>
        : <AlertBox message={`No data for search query "${query}!" \nor Rate Limit from the server!`} title="Search Not found" /> 
        }
    </Container>
  )
}

export default SearchPage