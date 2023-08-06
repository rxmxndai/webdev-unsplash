import { useState } from "react"
import styled from "styled-components"
import { addImageToStorage } from "../apicalls/imageCall"
import Modal from "../components/AlertBox.jsx"
import { device } from "../Media"

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 120px;
    position: relative;
    @media ${device.mobile} {
      margin: 120px 20px 20px 20px;
    }
    
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
  margin: 50px;
  gap: 20px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  @media ${device.mobile} {
    padding: 30px;
    margin: 30px;
  }
`

const Title = styled.h2`
  @media ${device.mobile} {
    font-size: 20px;
  }
`

const MyForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  font-size: 18px;
  font-weight: 400;
`

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Label = styled.label`
  
`

const Input = styled.input`
  padding: 10px;
  font-size: 18px;
  font-weight: 400;
  border: ${props => props.error ? '1px solid red' : '1px solid #333'};


  &:focus {
    background-color: #B9D9EB;
    border: blue 1px solid;
  }
  @media ${device.mobile} {
    font-size: 14px;
  }
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



const Form = () => {


  // Form data state managemnet
  const [form, setForm] = useState({ title: "", image: "" });

  // Error on data input
  const [error, setError] = useState({ title: false, image: false })

  // Modal for success
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value })
  }



  // Add Image to Local Storage Logic
  const handleSubmit = (e) => {
    e.preventDefault();

    // Emptyu form submission check
    if (form.image.length === 0) {
      return setError({ ...error, image: true });
    }
    else if (form.title.length === 0) {
      return setError({ ...error, title: false });
    }

    // regex for validating a legit URL
    const urlPattern = /^(https?:\/\/)?[\w.-]+\.[a-zA-Z]{2,}(\/\S*)?$/;

    if (!urlPattern.test(form.image)) {
      return setError({ ...error, image: true });
    }


    // Add data to localStorage
    addImageToStorage({ data: form });

    setForm({ title: "", image: "" })
    setError({ title: false, image: false })
    setSuccess(!success);
  }

  return (
    <Container>


      {success ?
        <Modal message="Image added to storage!" title="Add Image update" setSuccess={setSuccess} />
        :
        <Wrapper>
          <Title> Add Image Form </Title>
          <MyForm onSubmit={handleSubmit}>
            <FormControl>
              <Label htmlFor="title" > Title </Label>
              <Input error={error.title} type="text" name="title" value={form?.title} onChange={(e) => handleChange(e)} />
            </FormControl>

            <FormControl>
              <Label htmlFor="image" > Image Url </Label>
              <Input error={error.image} type="text" name="image" value={form?.image} onChange={(e) => handleChange(e)} />
              {error.image && <button style={{ color: "red", border: 'none' }} > Needs a valid Image Url </button>}
            </FormControl>


            <Button type={"submit"} > Add Image </Button>
          </MyForm>
        </Wrapper>
      }

    </Container>
  )
}

export default Form