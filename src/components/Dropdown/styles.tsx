import styled from "styled-components";

export const Container = styled.div`
  background-color: hsla(225, 14%, 28%, 1);
  width: 40px;
`;

export const Button = styled.button`
  width: 40px;
  justify-content: center;
  align-items: center;
  background-color: hsla(225, 14%, 28%, 1);
  border: none;
  &:hover {
    background-color: #1a54a8;
  }
`;

export const UL = styled.ul`
  list-style: none;
`;

export const LI = styled.li`
  width: 80px;
  background-color: hsla(225, 14%, 28%, 1);
`;

export const MenuButton = styled.button`
  width: 100%;
  height: 35px;
  border: none;
  background-color: hsla(225, 14%, 28%, 1);
  &:hover {
    background-color: #1a54a8;
  }
`;

export const Label = styled.p`
  color: white;
`;
