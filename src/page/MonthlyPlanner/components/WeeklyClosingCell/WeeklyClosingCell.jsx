import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const WeeklyClosingCell = ({ month, week }) => {
  const navigator = useNavigate();
  const handleOnClick = () => {
    navigator(`/cashbook/2024/monthly/${month}/weekly/${week}/1`);
  };
  return <CellContainer onClick={handleOnClick} />;
};

const CellContainer = styled.div`
  width: 100%;
  height: 5vh;
  margin: 0;
`;

export default WeeklyClosingCell;
