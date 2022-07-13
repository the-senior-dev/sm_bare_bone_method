import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import PageContainer from "../components/styled/PageContainer"

export default function MoviePage() {
    return (
        <PageContainer>
            <div style={{display: "flex"}}>
                <img src="https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"></img>
                <div>
                    <h1>Star Wars</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            <Link to="/">Go Back</Link>
        </PageContainer>
    )
}


