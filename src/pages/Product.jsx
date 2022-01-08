import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import { mobile } from "../responsive"

const Container = styled.div`
`
const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({ padding:"10px", flexDirection:"column"})}
`
const ImgContainer = styled.div`
flex: 1;
padding: 0px 50px;
${mobile({ padding:"10px"})}
`
const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${mobile({ height:"40vh"})}
`
const InfoContainer = styled.div`
flex: 1;
padding: 0 50px;
`
const Title = styled.h1`
font-weight: 100;
`
const Desc = styled.p`
margin: 20px 0;
`
const Price = styled.span`
font-weight: 100;
font-size: 40px;
`
const FilterContainer = styled.div`
width: 50%;
margin: 30px 0px;
display: flex;
justify-content: space-between;
${mobile({ width:"100%"})}
`
const Filter = styled.div`
display: flex;
align-items: center;
`
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`
const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0 5px;
cursor: pointer;
`
const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
`
const FilterSizeOption = styled.option`
`
const AddContainer = styled.div`
display: flex;
align-items: center;
width: 50%;
justify-content: space-between;
${mobile({ width:"100%"})}
`
const AmountContainer = styled.div`
display: flex;
align-items:center;
font-weight: 700;
`
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid gray;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`
const Button = styled.button`
padding: 15px;
border : 2px solid teal;
background-color: white;
cursor: pointer;
border-radius: 10px;
font-weight: 500;

&:hover{
    background-color: #64c0c0;
}
`

const Product = () => {
    return (
        <Container>
         <Navbar/>
         <Announcement/>
         <Wrapper>
            <ImgContainer>
                 <Image src="https://ae01.alicdn.com/kf/H3b71815abb244e17aa91f952f062cfe33/Aolamegs-Men-s-Denim-Jacket-Cartoon-Comics-Patchwork-Cowboy-Jackets-Men-Loose-Oversize-Coat-High-Street.jpg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Denim Jacket</Title>
                <Desc>Solid Casual Oversized Mens Denim Jacket Plus Size 4XL Bomber Jacket Men High Quality Cowboy Men's Jean Jacket Zoro One-Piece
                </Desc>
                <Price>Rs.5,000/-</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="darkblue"/>
                        <FilterColor color="gray"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>   
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>Add to cart</Button>
                </AddContainer>
            </InfoContainer>

         </Wrapper>
         <Newsletter/>
         <Footer/>
        </Container>
    )
}

export default Product
