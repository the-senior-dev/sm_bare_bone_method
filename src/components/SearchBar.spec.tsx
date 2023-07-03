import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  test("displays welcome message and subtitle", () => {
    // Arrange
    render(<SearchBar setSearchText={jest.fn()} />);

    // Act
    const welcomeMessage = screen.getByText("Welcome.");
    const subtitle = screen.getByText(
      "Millions of movies, TV shows and people to discover. Explore now."
    );

    // Assert
    expect(welcomeMessage).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });

  test("on click it calls the setSearchText function", async () => {
    // Arrange
    const setSearchText = jest.fn();
    const inputText = "Hello World";
    const user = userEvent.setup();
    render(<SearchBar setSearchText={setSearchText} />);

    // Act
    await userEvent.clear(screen.getByTestId("input-search"));
    await user.type(screen.getByTestId("input-search"), inputText);
    await user.click(screen.getByTestId("btn-search"));

    // Assert
    // expect(setSearchText).toHaveBeenCalledTimes(1);
    expect(setSearchText).toHaveBeenCalledWith(inputText);
  });
});
