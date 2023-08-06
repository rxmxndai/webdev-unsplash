import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { device } from "../Media"

const Container = styled.div`
    padding: 20px 30px;
    border: 1px solid #444;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center; 
`

const Title = styled.h2`
    margin: 10px;
    font-size: 24px; 
    @media ${device.mobile} {
      margin: 5px;
      font-size: 20px;
    }
`

const Message = styled.a`
    font-weight: 400;
    font-size: 24px;

    @media ${device.mobile} {
      font-size: 18px;
    }
`

const Button = styled.button`
  margin-top: 10px;
  padding: 10px 30px;
  cursor: pointer;
  border:#034694 1px solid; 
  font-weight: 600;

  &:hover {
    background-color: #3457D5;
    color: white;
  }
  
  @media ${device.mobile} {
    margin-top: 15px; 
  }
`

const AlertBox = ({ message, title, setSuccess }) => {

  const navigate = useNavigate();

  return (
    <Container>
      <Title> {title} </Title>
      <Message> {message} </Message>
      {setSuccess &&
        <Button onClick={() => {
          setSuccess(false)
          navigate("/");
        }}> OK </Button>
      }
    </Container>
  )
}

export default AlertBox
