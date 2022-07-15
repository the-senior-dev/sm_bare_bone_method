import React from "react";
import styled from "styled-components";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  lastPage: number;
}

export default function Pagination({
  currentPage,
  setCurrentPage,
  lastPage,
}: PaginationProps) {
  return (
    <PaginationContainer>
      <button disabled={currentPage === 1} onClick={() => setCurrentPage(1)}>
        first
      </button>
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        previous
      </button>
      <p>{currentPage}</p>
      <button
        disabled={currentPage === lastPage}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        next
      </button>
      <button
        disabled={currentPage === lastPage}
        onClick={() => setCurrentPage(lastPage)}
      >
        last
      </button>
    </PaginationContainer>
  );
}

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
