import styled from "styled-components";
import "./MonthsLabel.css";

const MonthsLabel = ({ number, current, onClick }) => {
  const handleOnClick = (event) => {
    onClick(event);
  };

  return (
    <LabelContainer>
      {parseInt(current) !== number && (
        <NonSelectLabel onClick={handleOnClick}>{number}</NonSelectLabel>
      )}
      {parseInt(current) === number && (
        <SelecedLabel onClick={handleOnClick}>{number}</SelecedLabel>
      )}
    </LabelContainer>
  );
};

const LabelContainer = styled.div`
  display: flex;
  width: 11.1vw;
`;
const NonSelectLabel = styled.div`
  width: 100%;
  height: 50%;
  background: #f2e5c7;
  border-right: 2px solid #e9dbbb;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const SelecedLabel = styled.div`
  width: 100%;
  height: 65%;
  background: #f2e5c7;
  border-right: 2px solid #e9dbbb;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  &:after {
    content: "";
    position: relative;
    display: block;
    width: 100%;
    height: 65%;
    transform: translate(0, 40%);
    background: #ffffffa8;
    border-right: 2px solid #e9dbbb;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;
export default MonthsLabel;
