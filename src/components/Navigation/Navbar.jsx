import styled from "styled-components"
import SearchBox from "./SearchBox"
import { device } from "../../Media"
import { useEffect, useState } from "react"

const Container = styled.div`
  border-bottom: 0.5px solid black;
  padding: 0px 50px;
  height: 60px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 9;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;

  @media ${device.mobile} {
    padding: 0px 30px;
  }
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
  font-size: 20px;
  text-decoration: none;
  padding: 10px;
`

const SearchField = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`

const HamBurger = styled.button`
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 10px;
  outline: none;
  border: none;
`
const Line = styled.div`
  padding: 2px 10px;
  background-color: #555;
`


const HamBurgerList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  z-index: 99;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border: 1px solid blue;

  position: absolute;
  right: 0px;
  top: 100%;
`

const MiniSearch = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`


const Navbar = () => {
  // State to track which view the browser is currently in
  const [responsive, setResponsive] = useState(window.matchMedia(device.mobile).matches);

  // state for hamburger meny to display
  const [open, setOpen] = useState(false);

  const [searchOpen, setSearchOpen] = useState(false);

  // get the current res and tally with the max length of mobile view
  useEffect(() => {
    const handleResize = () => {
      const sizeNow = window.matchMedia(device.mobile).matches;
      setResponsive(sizeNow);
      if (sizeNow && !searchOpen) {
        setSearchOpen(true);
      }
      else {
        setSearchOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container>
      {!searchOpen &&
        <Wrapper>
          <Left>
            <Point href="/" > UnSpLaSh </Point>
          </Left>

          {!responsive ?
            <>
              <SearchField >
                <SearchBox />
              </SearchField>

              <Right>
                <Point href="/add-image" > ➕ </Point> 
              </Right>
            </>
            :
            <HamBurger onClick={() => setOpen(!open)}  >
              <Line>  </Line>
              <Line>  </Line>
              <Line>  </Line>
            </HamBurger>
          }
          {open &&
            <HamBurgerList>
              <Point onClick={() => {
                setSearchOpen(!searchOpen)
                setOpen(!open);
              }} > Search </Point>
              <Point href="/add-image"> Add Image </Point>
            </HamBurgerList>
          }
        </Wrapper>
      }

      {responsive && searchOpen &&
        <MiniSearch>
          <SearchBox />
          <Point onClick={() => setSearchOpen(!searchOpen)} > ❌  </Point>
        </MiniSearch>
      }


    </Container>
  )
}

export default Navbar