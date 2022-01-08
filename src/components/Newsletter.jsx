import { SendRounded } from '@material-ui/icons'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
height: 60vh;
background-color: #eec7ee;
align-items: center;
display: flex;
justify-content: center;
flex-direction: column;
`
const Title = styled.h1`
font-size: 70px;
margin-bottom: 15px;
`
const Desc = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 15px;
${mobile({ textAlign:"center"})}
`
const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid grey;
${mobile({ width:"80%"})}
`
const Input = styled.input`
border:none;
flex:8;
padding-left: 20px;

`
const Button = styled.button`
flex:1;
border:none;
background-color: #71c4c4;
color: black;
`


const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Get Notifications on new products</Desc>
            <InputContainer>
            <Input placeholder='Your email'/>
            <Button>
                <SendRounded/>
            </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
