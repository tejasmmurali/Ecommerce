import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 40px;
    background-color: black;
    color: white;
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
`

const Announcement = () => {
    return (
        <Container>
            Super Deal!    Free shipping on orders over 5,000/-*
        </Container>
    )
}

export default Announcement
