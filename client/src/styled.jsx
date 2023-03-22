import styled from "styled-components";

export const HeaderBar = styled.header`
  height: 100px;
  border-bottom: 2px solid #e4e4e4;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-family: "Edu NSW ACT Foundation", cursive;
`;

export const Wrap = styled.main`
  display: flex;
`;

export const LeftMenu = styled.div`
  width: 200px;
  height: calc(100vh - 100px);
  border-right: 2px solid #e4e4e4; ;
`;

export const Colors = styled.div`
  width: calc(100% - 200px);
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const ColorBoard = styled.div`
  width: 200px;
  height: 300px;
  margin: 10px;
  background-color: ${(props) => props.backgroud};
`;
