import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
  width: 50%;
`

const Form = styled.form`
    width: 100%;
`

const Input = styled.input`
    width: 100%;
    padding: 10px 30px;
    border-radius: 12px;
    border: 1px solid #cccccc;
    font-size: 16px;
    font-weight: 500;
    outline: none;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

    &:focus {
      border: 1px solid #555555 !important;
    }
`

const Button = styled.button`
    padding: 10px 30px;
    display: none;
`



const SearchBox = () => {

  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${query}`)
  }


  return (
    <Container>
       <Form onSubmit={(e) => handleSearch(e)}>
          <Input placeholder="Search here..." value={query} onChange={(e) => setQuery(e.target.value)} />
          <Button type="submit" > Search </Button> 
       </Form>
    </Container>
  )
}

export default SearchBox