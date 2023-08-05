import styled from "styled-components"
import SearchBox from "./SearchBox"

const Container = styled.div`
  border-bottom: 0.5px solid black;
  padding: 0px 50px;
  height: 60px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 99;
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Left = styled.div`
  flex: 1;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
`

const Point = styled.a`
  cursor: pointer;
  color: #555;
  font-weight: 600;
  font-size: 24px;
  text-decoration: none;
`

const SearchField = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Point href="/" > UnSpLaSh </Point>
        </Left>
        {/* Search with the local state of this component */}
        <SearchField >
            <SearchBox />
        </SearchField>

        <Right>
          <Point href="/add-image" > ➕ </Point>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar