import styled from "styled-components"
import ImageList from "../components/ImageList"
import { useState } from "react";
import { useParams } from "react-router-dom";

const Container = styled.div`

`



const SearchPage = () => {
  const Query = useParams().query;
  const [page, setPage] = useState(1);

  return (
    <Container>
      <ImageList perPage={14} page={page} query={Query} />
    </Container>
  )
}

export default SearchPage