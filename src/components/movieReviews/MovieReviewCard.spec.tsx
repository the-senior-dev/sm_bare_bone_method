import React from "react";
import MovieReviewCard from "./MovieReviewCard";
import { render, screen } from "@testing-library/react";
import { MovieReview } from "../../utils/typesApi";

describe("loads and displays the review", () => {
  const review: MovieReview = {
    id: "23",
    author: "linus towards",
    content: "cool movie",
    created_at: "01.01.2022",
    author_details: {
      id: "02",
      rating: 7,
      name: "linus towards",
      username: "linus90",
      avatar_path: "/none",
    },
  };

  test("the review is rendered correctly", () => {
    render(<MovieReviewCard review={review} />);

    // DOM Query
    expect(screen.getByTestId("review-card-username")).toHaveTextContent(
      "linus towards"
    );
  });
});
