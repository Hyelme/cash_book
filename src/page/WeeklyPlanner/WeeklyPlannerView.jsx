import "./WeeklyPlanner.css";
import MonthsLabel from "components/Label/MonthsLabel";
import HeaderLine from "components/HeaderLine";
import Button from "components/Button";
import DigitalPanel from "./components/DigitalPanel";
import Table from "components/Table";
import Calendar from "./components/Calendar";
import Slider from "components/Slider";
import styled from "styled-components";
import {
  months,
  payPlanClassNameList,
  calendarClassNameList,
  weeklyClosingClassNameList,
  oneColTableClassNameList,
  fixedExpenditureClassNameList,
  memoClassNameList,
} from "./data/WeeklyPlannerTableData";
import { useEffect, useState } from "react";

// export interface ButtonProps {
//   theme?: "basic" | "label";
//   backgroundColor?: string;
//   size?: "small" | "medium" | "large";
//   onClick?: () => void;
//   isDisabled?: boolean;
//   children?: React.ReactNode;
//   className?: string;
// }
const WeeklyPlannerView = ({
  year,
  month,
  clickLabel,
  colcBudget,
  payPlanTableColumns,
  payPlanTableData,
  calendarColumns,
  weeklyClosingColumns,
  weeklyClosingData,
  prevMonthBalanceColumn,
  prevMonthBalanceData,
  expectedProfit1Column,
  expectedProfit1Data,
  expectedProfit2Column,
  expectedProfit2Data,
  fixedExpenditure,
  memoColumn,
  memoData,
  currentBudgetColumn,
  currentBudgetData,
}) => {
  const [totalProfit, setTotalProfit] = useState(0);
  const [totalExpanditure, setTotalExpanditure] = useState(0);

  const handleOnClickLabel = (event) => {
    clickLabel(event);
  };

  useEffect(() => {
    setTotalProfit(
      colcBudget(["prevMonthBalanc", "expectedProfit1", "expectedProfit2"])
    );
  }, [colcBudget]);

  // for (let element in fixedExpenditure) {
  //   for (let element2 in fixedExpenditure[element]) {
  //     console.log(fixedExpenditure[element][element2]);
  //   }
  // }

  return (
    <>
      <HeaderContainer className="header-box">
        <Slider
          children={months.map((month) => (
            <MonthsLabel number={month} key={month} />
          ))}
        />
      </HeaderContainer>
      <HeaderLine />
      <PageContainer className="page-container">
        <GoToBox className="go-to-box">
          <Button
            theme="label"
            size="medium"
            backgroundColor="#F5EBD2"
            onClick={handleOnClickLabel}
          >
            목차 페이지로
          </Button>
        </GoToBox>
        <TopContainer>
          <PanelContainer>
            <DigitalPanel month={month < 10 ? 0 : 1} />
            <DigitalPanel month={month < 10 ? month : month % 10} />
          </PanelContainer>
          <Table
            classNameList={payPlanClassNameList}
            columns={payPlanTableColumns}
            data={payPlanTableData}
          />
          <ButtonContainer>
            <Button theme="basic" size="medium">
              월간 계획
            </Button>
            <Button theme="basic" size="medium">
              월간 결산
            </Button>
          </ButtonContainer>
        </TopContainer>
        <CalendarContainer className="calendar-container">
          <Calendar
            classNameList={calendarClassNameList}
            columns={calendarColumns}
            year={year}
            month={month}
          />
          <WeeklyClosingContainer>
            <Table
              classNameList={weeklyClosingClassNameList}
              columns={weeklyClosingColumns}
              data={weeklyClosingData}
            />
          </WeeklyClosingContainer>
        </CalendarContainer>
        <ExpectedBudgetContainer>
          <ProfitContainer>
            <Table
              classNameList={oneColTableClassNameList}
              columns={prevMonthBalanceColumn}
              data={prevMonthBalanceData}
            />
            <Table
              classNameList={oneColTableClassNameList}
              columns={expectedProfit1Column}
              data={expectedProfit1Data}
            />
            <Table
              classNameList={oneColTableClassNameList}
              columns={expectedProfit2Column}
              data={expectedProfit2Data}
            />
          </ProfitContainer>
          <TotalProfitContainer>
            수입 합계 : {totalProfit} ₩
          </TotalProfitContainer>
          <FixedExpenditureContainer>
            {fixedExpenditure.map((categori, index) => {
              return (
                <div key={index}>
                  <Table
                    classNameList={fixedExpenditureClassNameList}
                    columns={categori["column"]}
                    data={categori["data"]}
                  />
                </div>
              );
            })}
            <TotalProfitContainer>
              고정 지출 합계 : {totalExpanditure} ₩
            </TotalProfitContainer>
          </FixedExpenditureContainer>
        </ExpectedBudgetContainer>
        <PageBottomContainer>
          <Table
            classNameList={memoClassNameList}
            columns={memoColumn}
            data={memoData}
          />
          <Table
            classNameList={oneColTableClassNameList}
            columns={currentBudgetColumn}
            data={currentBudgetData}
          />
        </PageBottomContainer>
      </PageContainer>
    </>
  );
};

const HeaderContainer = styled.div``;
const PageContainer = styled.div`
  margin: 0 5%;
`;
const GoToBox = styled.div``;
const TopContainer = styled.div`
  display: flex;
  margin-top: 15%;
`;

const PanelContainer = styled.div`
  display: flex;
  margin-right: 10px;
`;

const ButtonContainer = styled.div`
  // display; -webkit-inline-box;
  display: grid;
`;

const CalendarContainer = styled.div`
  display: table;
  margin-top: 5%;
  width: 100%;
`;

const WeeklyClosingContainer = styled.div`
  width: 100%;
`;

const ExpectedBudgetContainer = styled.div`
  display: block;
  width: 100%;
`;

const ProfitContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 3px;
`;

const FixedExpenditureContainer = styled.div``;

const TotalProfitContainer = styled.div`
  display: grid;
  justify-items: end;
  margin-right: 15%;
`;

const PageBottomContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
`;

export default WeeklyPlannerView;
