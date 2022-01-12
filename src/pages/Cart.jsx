import styled from "styled-components"
import Navbar from '../components/Navbar'
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import { Add, Remove } from "@material-ui/icons"
import { mobile } from "../responsive"

const Container = styled.div`
`
const Wrapper = styled.div`
padding: 20px;
${mobile({ padding:"10px"})}
`
const Title = styled.h1`
font-weight: 300;
text-align: center;
`
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`
const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props=>props.type === "filled" && "none"};
background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
color: ${props=>props.type === "filled" && "white"};

`
const TopTexts = styled.div`
${mobile({ display:"none"})}
`
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;

`
const Bottom = styled.div`
display: flex;
justify-content:space-between;
${mobile({ flexDirection:"column"})}
`
const Info = styled.div`
flex:3;
`
const Product = styled.div`
display: flex;
justify-content:space-between;
${mobile({ flexDirection:"column"})}
`
const ProductDetails = styled.div`
flex: 2;
display: flex;

`
const Image = styled.img`
width: 200px;
`
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction:column;
justify-content: space-around;
`
const ProductName = styled.span`
`
const ProductId = styled.span`
`
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
border: 1px solid black;

`
const ProductSize = styled.span`
`
const PriceDetails = styled.div`
flex: 1;
align-items: center;
display: flex;
justify-content: center;
flex-direction: column;
`
const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;

`
const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
${mobile({ margin:"5px 15px"})}
`
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
${mobile({ marginBottom:"20px"})}
`
const Hr = styled.hr`
    background-color: #eeeeee;
    border: none;
    height: 3px;
`
const Summary = styled.div`
flex:1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;

`
const SummaryTitle = styled.h1`
font-weight: 200;
`
const SummaryItem = styled.div`
margin: 25px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type === "total" && "500"};
font-weight: ${props=>props.type === "total" && "25px"};
`
const SummaryItemText = styled.span`
`
const SummaryItemPrice = styled.span`
`
const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
`


const Cart = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <Title>Your bag</Title>
                <Top>
                    <TopButton>Continue shopping</TopButton>
                    <TopTexts>
                    <TopText>Shopping bag(2)</TopText>
                    <TopText>Your wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">Checkout now</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetails>
                                <Image src="https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dwf48348bc/images/e_08/M7652_E_08X1.jpg?sw=406"/>
                                <Details>
                                    <ProductName><b>Product:</b>Converse Optic white Sneakers</ProductName>
                                    <ProductId><b>ID:</b>58726</ProductId>
                                    <ProductColor color="white"/>
                                    <ProductSize><b>Size:</b>10UK</ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>1</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>5,000/-</ProductPrice>
                            </PriceDetails>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetails>
                                <Image src="https://assets.adidas.com/images/w_600,f_auto,q_auto/fd78adb31bb14f74b916ac1300b2028e_9366/Superstar_Shoes_Black_FV2832_01_standard.jpg"/>
                                <Details>
                                    <ProductName><b>Product:</b>Adidas Superstar white Sneakers</ProductName>
                                    <ProductId><b>ID:</b>67235</ProductId>
                                    <ProductColor color="black"/>
                                    <ProductSize><b>Size:</b>10UK</ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>1</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>7,999/-</ProductPrice>
                            </PriceDetails>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>Order summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>5,000/-</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated shipping</SummaryItemText>
                            <SummaryItemPrice>1,792/-</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping discount</SummaryItemText>
                            <SummaryItemPrice>-292/-</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>5,000/-</SummaryItemPrice>
                        </SummaryItem>
                        <Button>Checkout now</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart
