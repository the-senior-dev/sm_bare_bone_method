import moment from "moment"
import React from "react"
import { MovieReview } from "../../utils/types"

export default function MovieReviewCard({review}:{review:MovieReview}){
    return(
        <div>
            <p>Review by {review.author_details.username}</p>
            <p>{review.content}</p>
            <p>Date: {moment(review.created_at).format()}</p>
        </div>
    )
}