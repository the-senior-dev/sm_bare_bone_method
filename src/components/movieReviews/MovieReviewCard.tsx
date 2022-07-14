import React from "react";
import moment from "moment";
import { MovieReview } from "../../utils/typesApi";

export default function MovieReviewCard({ review }: { review: MovieReview }) {
  return (
    <div>
      <p data-testid="review-card-username">
        Review by {review.author_details.username}
      </p>
      <p data-testid="review-card-content">{review.content}</p>
      <p data-testid="review-card-date">
        Date: {moment(review.created_at).format()}
      </p>
    </div>
  );
}
