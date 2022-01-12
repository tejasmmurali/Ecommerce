import { Email, Facebook, Instagram, LocationOn, Phone, Twitter } from '@material-ui/icons'
import styled from 'styled-components'
import { mobile } from '../responsive'
 
const Container = styled.div`
display: flex;
background-color: #f5f5ca;
margin-top: 10px;
${mobile({ flexDirection : "column"})}
`
const Left = styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo = styled.h1`
`
const Desc = styled.p`
margin: 20px 0px;
`
const SocialContainer = styled.div`
display: flex;
`
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
align-items: center;
display: flex;
justify-content: center;
margin:3px;
`



const Center = styled.div`
flex:1;
padding: 20px;
${mobile({ display:"none"})}
`
const Title=styled.h3`
margin-bottom: 30px;
    
`
const List = styled.ul`
margin:0;
padding: 20px;
display: flex;
flex-wrap: wrap;


`
const ListItem = styled.li`
width:50%;
margin-bottom: 10px;

`
const Right = styled.div`
flex:1;
padding: 20px;
justify-content: center;
${mobile({ backgroundColor:"#fff7f7"})}
`
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;`

const Payment = styled.img`
height:60px;
margin-top: 8px;
`


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>WE BUY</Logo>
                <Desc>We have infinte collections of fashions you would love to buy. You can reach out to us for more information on:</Desc>
                <SocialContainer>
                    <SocialIcon color="0054be">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="d15254">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="29b7ef">
                        <Twitter/>
                    </SocialIcon>
                </SocialContainer>
                </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men Fashion</ListItem>
                    <ListItem>Women fashion</ListItem>
                    <ListItem>Accesories</ListItem>
                    <ListItem>My account</ListItem>
                    <ListItem>Order tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>                 
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><LocationOn style={{marginRight:"10px"}}/>76 Raj Kumar, Yelahanka, Bengaluru 560007</ContactItem>
                <ContactItem><Phone style={{marginRight:"10px"}}/>+91 8764-735-273</ContactItem>
                <ContactItem><Email style={{marginRight:"10px"}}/>rajkumar1991@gmail.com</ContactItem>
                <Payment src="https://www.kindpng.com/picc/m/96-966814_no-title-credit-card-paypal-logo-hd-png.png"/>
            </Right>
            
        </Container>
            
        
    )
}

export default Footer
