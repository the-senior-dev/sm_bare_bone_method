import React, { useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "../../store/context";

interface PrimaryButtonRawProps {
  textColor: string;
}

const PrimaryButtonRaw = styled.button<PrimaryButtonRawProps>`
  height: 40px;
  display: flex;
  width: 200px;
  background-color: #0984e3;
  border-color: #0984e3;
  color: ${(props) => props.textColor};
  font-weight: 700;
  font-size: 1.2rem;
  justify-content: center;
  align-items: center;
  border-width: 0px;
  margin-right: 4px;
  margin-left: 4px;
  &:hover {
    background-color: #0984e3;
    cursor: pointer;
  }
  &:disabled {
    background-color: grey;
    cursor: normal;
  }
`;

export default function PrimaryButton({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"button">) {
  const context = useContext(DarkModeContext);
  return (
    <PrimaryButtonRaw {...props} textColor={context.theme.background}>
      {children}
    </PrimaryButtonRaw>
  );
}
