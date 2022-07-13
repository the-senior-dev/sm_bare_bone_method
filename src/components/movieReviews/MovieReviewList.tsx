import React from "react"
import { useEffect, useState } from "react"
import styled from "styled-components"
import movieApiClient from "../../utils/movieApiClient"
import { MovieReview } from "../../utils/types"
import MovieReviewCard from "./MovieReviewCard"

export default function MovieReviewList({movieId}:{movieId: string}){
    const [reviewList, setReviewList] = useState<MovieReview[] | null>()

    useEffect(() => {
        movieApiClient.getMovieReview(movieId).then(data => {
            setReviewList(data)
        })
    }, [])

    return(
        <ReviewListContainer>
            <h3>Reviews:</h3>
            {reviewList?.map((review) => <MovieReviewCard review={review}/>)}
        </ReviewListContainer>
    )
}

const ReviewListContainer = styled.div`
    display: flex;
    flex-direction: column;
`