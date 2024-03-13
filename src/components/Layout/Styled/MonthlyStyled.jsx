import styled from "styled-components";

const TopContainer = styled.div`
  display: flex;
`;

const PageBottomContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: end;
  grid-template-columns: 45% 45%;
  grid-template-rows: 25vh;
  margin-bottom: 5%;
`;

export { TopContainer, PageBottomContainer };
