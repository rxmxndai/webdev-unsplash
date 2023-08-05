import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
    padding: 30px 50px;
    border: 1px solid#444;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.h2`
    margin: 10px;
`

const Message = styled.a`
    padding: 20px 50px;
    font-weight: 400;
    font-size: 24px;
`

const Button = styled.button`
  padding: 10px 30px;
  cursor: pointer;
  border:#034694 1px solid; 
  font-weight: 600;

  &:hover {
    background-color: #3457D5;
    color: white;
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