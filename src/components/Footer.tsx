import React from "react"
import styled from "styled-components"

export default function Footer(){
    return (
        <FooterContainer>
            @theSeniorDev.com - all right reserved
        </FooterContainer>
    )
}


const FooterContainer = styled.div`
    width: 100%;
    background-color: black;
    color: white;
`