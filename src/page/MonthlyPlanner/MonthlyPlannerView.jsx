import "./MonthlyPlanner.css";
import Button from "@/components/Button";
import DigitalPanel from "./components/DigitalPanel";
import Table from "@/components/Table";
import Calendar from "./components/Calendar";
import styled from "styled-components";
import {
  payPlanClassNameList,
  calendarClassNameList,
  weeklyClosingClassNameList,
  oneColTableClassNameList,
  fixedExpenditureClassNameList,
  memoClassNameList,
} from "./data/MonthlyPlannerTableData";
import { useEffect, useState } from "react";
import CashbookLayout from "@/components/Layout/Cashbook";

// export interface ButtonProps {
//   theme?: "basic" | "label";
//   backgroundColor?: string;
//   size?: "small" | "medium" | "large";
//   onClick?: () => void;
//   isDisabled?: boolean;
//   children?: React.ReactNode;
//   className?: string;
// }
const MonthlyPlannerView = ({
  year,
  month,
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

  useEffect(() => {
    setTotalProfit(
      colcBudget(["prevMonthBalanc", "expectedProfit1", "expectedProfit2"])
    );
  }, [colcBudget]);

  return (
    <CashbookLayout>
      <TopContainer>
        <PanelContainer>
          <DigitalPanel month={month < 10 ? 0 : 1} />
          <DigitalPanel month={month < 10 ? month : month % 10} />
        </PanelContainer>
        <Table
          classNameList={payPlanClassNameList}
          columns={payPlanTableColumns}
          data={payPlanTableData}
          colgroupList={[30, 30, 40]}
        />
        <ButtonContainer>
          <Button theme="basic" size="small" backgroundColor="#ffe4a9">
            월간 계획
          </Button>
          <Button theme="basic" size="small" backgroundColor="#f1eee8">
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
        <TotalBudgetContainer>
          <BudgetItem>수입 합계 : </BudgetItem>
          <BudgetItem>{totalProfit}</BudgetItem>
          <BudgetItem>₩</BudgetItem>
        </TotalBudgetContainer>
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
          <TotalBudgetContainer>
            <BudgetItem>고정 지출 합계 : </BudgetItem>
            <BudgetItem>{totalExpanditure}</BudgetItem>
            <BudgetItem>₩</BudgetItem>
          </TotalBudgetContainer>
        </FixedExpenditureContainer>
      </ExpectedBudgetContainer>
      <PageBottomContainer>
        <Table
          classNameList={memoClassNameList}
          columns={memoColumn}
          data={memoData}
        />
        <Table
          classNameList={{
            ...oneColTableClassNameList,
            tableCN: oneColTableClassNameList.tableCN + " height-30",
          }}
          columns={currentBudgetColumn}
          data={currentBudgetData}
        />
      </PageBottomContainer>
    </CashbookLayout>
  );
};

const TopContainer = styled.div`
  display: flex;
`;
const PanelContainer = styled.div`
  display: flex;
  position: relative;
  margin-left: 10px;
  top: -7px;
`;

const ButtonContainer = styled.div`
  display: grid;
  margin-left: 10px;
`;

const CalendarContainer = styled.div`
  display: table;
  margin: 5% 0;
  width: 100%;
`;

const WeeklyClosingContainer = styled.div`
  width: 100%;
  margin-top: 5%;
`;

const ExpectedBudgetContainer = styled.div`
  width: 100%;
  display: grid;
`;

const ProfitContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 5%;
`;

const TotalBudgetContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: end;
  justify-items: end;
  margin-right: 5%;
  margin: 5% 0;
`;

const BudgetItem = styled.div`
  font-size: 13px;
  padding: 0 5px 0 3px;
  border-bottom: 1px solid var(--line-or-char);
`;

const FixedExpenditureContainer = styled.div``;

const PageBottomContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: end;
  grid-template-columns: 45% 45%;
  grid-template-rows: 25vh;
  margin-bottom: 5%;
`;

export default MonthlyPlannerView;
