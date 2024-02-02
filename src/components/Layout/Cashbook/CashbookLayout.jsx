import Button from "components/Button";
import HeaderLine from "components/HeaderLine";
import MonthsLabel from "components/Label/MonthsLabel";
import Slider from "components/Slider";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setYear, setMonth } from "store/cashbook/cashbook";
import styled from "styled-components";

const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const CashbookLayout = ({ children }) => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const { year, month } = useParams();

  useEffect(() => {
    dispatch(setYear(parseInt(year)));
    dispatch(setMonth(parseInt(month)));
  }, []);

  const currMonth = useSelector((state) => state.cashbook.month);

  const handleOnClickMonthLabel = (event) => {
    dispatch(setMonth(parseInt(event.target.innerText)));
    navigator(`/cashbook/2024/monthly/${event.target.innerText}/planner`);
  };
  const handleOnClickGoToIndexButton = () => {
    navigator(`/cashbook/2024/cover`);
  };
  return (
    <LayoutContainer>
      <HeaderContainer className="header-box">
        <Slider
          children={months.map((month) => (
            <MonthsLabel
              key={month}
              number={month}
              current={currMonth}
              onClick={handleOnClickMonthLabel}
            />
          ))}
        />
      </HeaderContainer>
      <HeaderLine />
      <PageContainer>
        <GoToBox>
          <Button
            theme="label"
            size="medium"
            backgroundColor="#F5EBD2"
            onClick={handleOnClickGoToIndexButton}
          >
            목차 페이지로
          </Button>
        </GoToBox>
        {children}
      </PageContainer>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div``;
const HeaderContainer = styled.div`
  margin: 5px 5px 0 5px;
  height: 1.5em;
`;
const PageContainer = styled.div`
  margin: 0 5%;
`;
const GoToBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 5% 0 15% 0;
`;

export default CashbookLayout;
