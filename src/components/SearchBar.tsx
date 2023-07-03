import React, { useState } from "react";
import styled from "styled-components";
import { PrimaryButton } from "./styled";
import backgroundImage from "../assets/search-header.png";

interface SearchBarProps {
  setSearchText: (text: string) => void;
}

export default function SearchBar({ setSearchText }: SearchBarProps) {
  const [inputText, setInputText] = useState("Star Wars");

  return (
    <SearchBarContainer>
      <SearchBarTitle>Welcome.</SearchBarTitle>
      <SearchBarSubTitle>
        Millions of movies, TV shows and people to discover. Explore now.
      </SearchBarSubTitle>
      <SearchWrapper>
        <SearchInput
          data-testid="input-search"
          value={inputText}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setInputText(event.target.value)
          }
        ></SearchInput>
        <PrimaryButton
          data-testid="btn-search"
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            setSearchText(inputText)
          }
        >
          Search
        </PrimaryButton>
      </SearchWrapper>
    </SearchBarContainer>
  );
}

const SearchBarContainer = styled.div`
  height: 300px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  background-image: url("${backgroundImage}");
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

const SearchBarTitle = styled.h2`
  font-size: 3em;
  font-weight: 700;
  line-height: 1;
  color: white;
  margin-bottom: 10px;
`;

const SearchBarSubTitle = styled.h3`
  font-size: 2em;
  font-weight: 600;
  margin: 0;
  color: white;
  margin-bottom: 40px;
`;

// NOTE: You can use the components bellow to go quicker

const SearchInput = styled.input`
  display: flex;
  border-radius: 0px;
  border-width: 0px;
  height: 40px;
  flex-grow: 1;
  padding: 0px;
  margin-right: 10px;
  padding-left: 10px;
  font-size: 1rem;
  color: #636e72;
  font-weight: 300;
`;

const SearchWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-end;
`;
