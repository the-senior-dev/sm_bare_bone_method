import React from "react"
import styled from "styled-components"

export default function Header(){
    return (
        <HeaderContainer>
            <h2>The Movie App</h2>
        </HeaderContainer>
    )
}


const HeaderContainer = styled.div`
    width: 100%;
    background-color: black;
    color: white;
`