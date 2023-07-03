import React, { useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "../../store/context";

interface MovieCardContainerProps {
  bkgColor: string;
}

const MovieCardContainerRaw = styled.div<MovieCardContainerProps>`
  display: flex;
  width: calc(50% - 20px);
  border: solid 1px ${(props) => props.bkgColor};
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 4px;
  box-sizing: border-box;
  height: 240px;
  background-color: ${(props) => props.bkgColor};
  &:hover {
    // background-color: #b2bec3;
    cursor: pointer;
    transform: scale(1.03);
    border-color: black;
  }
`;

export default function MovieCardContainer({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const context = useContext(DarkModeContext);
  return (
    <MovieCardContainerRaw
      {...props}
      bkgColor={context.theme.background_secondary}
    >
      {children}
    </MovieCardContainerRaw>
  );
}
