import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  payPlanColumn,
  calendarColumns,
  weeklyClosingColumns,
  weeklyClosingData,
  oneColTableColumn,
} from "./data/MonthlyPlannerTableData";
import {
  initPayPlanCell,
  initOneTableColumn,
  initOneTableData,
  initFixedExpenditure,
  setLocalStorage,
  getSaveData,
} from "./data/MonthlyPlannerFunc";
import WeeklyPlannerView from "./MonthlyPlannerView";
import TableCell from "components/Table/components/TableCell";

const WeeklyPlanner = () => {
  const navigator = useNavigate();
  const { year, month } = useParams();

  /* 월급 내역 */
  const [basicPay, setBasicPay] = useState(0);
  const [bonusPay, setBonusPay] = useState(0);

  useLayoutEffect(() => {
    const dataOnPayPlan = getSaveData(year + ":" + month + ".payPlan");

    setBasicPay(parseInt(initPayPlanCell("basicPay", dataOnPayPlan)));
    setBonusPay(parseInt(initPayPlanCell("bonusPay", dataOnPayPlan)));
  }, [year, month]);

  console.log("basic pay : " + basicPay);

  const memoForPayPlanData = useMemo(
    () => [
      {
        firstLabel: "월급",
        secondLabel: "기본급",
        item: (
          <TableCell
            type="basicPay"
            value={basicPay}
            setLocalStorage={(data, type) =>
              setLocalStorage(year + ":" + month + ".payPlan", data, type)
            }
          />
        ),
      },
      {
        firstLabel: "월급",
        secondLabel: "보너스",
        item: <TableCell type="bonusPay" value={bonusPay} />,
      },
    ],
    [basicPay, bonusPay, month, year]
  );

  const [prevMonthBalance, setPrevMonthBalance] = useState(0);
  const [expectedprofit1, setExpectedprofit1] = useState(0);
  const [expectedprofit2, setExpectedprofit2] = useState(0);
  const [currentbudget, setCurrentbudget] = useState(0);

  // const memoForPayPlanColumn = useMemo(() => payPlanColumn, []);
  // const memoForPayPlanData = useMemo(() => payPlanData, []);
  const memoForCalendarColum = useMemo(() => calendarColumns, []);
  const memoForWeeklyClosingColumn = useMemo(() => weeklyClosingColumns, []);
  const memoForWeeklyClosingData = useMemo(() => weeklyClosingData, []);

  const prevMonthBalanceColumn = useMemo(
    () =>
      initOneTableColumn(
        "전월 남은 금액",
        "prevMonthBalance",
        oneColTableColumn
      ),
    []
  );
  const prevMonthBalanceData = useMemo(
    () =>
      initOneTableData(
        "prevMonthBalance",
        prevMonthBalance === 0 ? (
          <input type="text" style={{ width: "99%" }} />
        ) : (
          <div onClick={handleOnClickPrevMonth}>{prevMonthBalance} 원</div>
        )
      ),
    [prevMonthBalance]
  );
  const expectedProfit1Column = useMemo(
    () => initOneTableColumn("예상 수입 (1)", "expectedProfit1"),
    []
  );
  const expectedProfit1Data = useMemo(
    () =>
      initOneTableData(
        "expectedProfit1",
        expectedprofit1 === 0 ? (
          <input type="text" style={{ width: "99%" }} />
        ) : (
          <div>{expectedprofit1} 원</div>
        )
      ),
    [expectedprofit1]
  );
  const expectedProfit2Column = useMemo(
    () => initOneTableColumn("예상 수입 (2)", "expectedProfit2"),
    []
  );
  const expectedProfit2Data = useMemo(
    () =>
      initOneTableData(
        "expectedProfit2",
        expectedprofit2 === 0 ? (
          <input type="text" style={{ width: "99%" }} />
        ) : (
          <div>{expectedprofit2} 원</div>
        )
      ),
    [expectedprofit2]
  );
  const fixedExpenditure = useMemo(() => initFixedExpenditure(), []);
  const memoColumn = useMemo(
    () => initOneTableColumn("월간 소비 계획 / 메모", "monthlyConsmPlan"),
    []
  );
  const memoData = useMemo(
    () => initOneTableData("monthlyConsmPlan", <textarea></textarea>),
    []
  );
  const currentBudgetColumn = useMemo(
    () => initOneTableColumn("이번 달 예산", "currentBudget"),
    []
  );
  const currentBudgetData = useMemo(
    () => initOneTableData("currentBudget", <div>{currentbudget} 원</div>),
    [currentbudget]
  );

  const handleOnClickLabel = (event) => {
    navigator(`/cashbook/2024/cover`);
  };
  const handleOnClickPrevMonth = (event) => {
    alert(event.target.value);
  };

  const colcBudget = (props) => {
    let total = 0;
    for (let variable in props) {
      switch (variable) {
        case "prevMouthBalance":
          total += prevMonthBalance;
          break;
        case "expectedProfit1":
          total += expectedprofit1;
          break;
        case "expectedProfit2":
          total += expectedprofit2;
          break;
        default:
          return 0;
      }
    }
    return total;
  };

  return (
    <WeeklyPlannerView
      year={year}
      month={month}
      clickLabel={handleOnClickLabel}
      colcBudget={colcBudget}
      payPlanTableColumns={payPlanColumn}
      payPlanTableData={memoForPayPlanData}
      calendarColumns={memoForCalendarColum}
      weeklyClosingColumns={memoForWeeklyClosingColumn}
      weeklyClosingData={memoForWeeklyClosingData}
      prevMonthBalanceColumn={prevMonthBalanceColumn}
      prevMonthBalanceData={prevMonthBalanceData}
      expectedProfit1Column={expectedProfit1Column}
      expectedProfit1Data={expectedProfit1Data}
      expectedProfit2Column={expectedProfit2Column}
      expectedProfit2Data={expectedProfit2Data}
      fixedExpenditure={fixedExpenditure}
      memoColumn={memoColumn}
      memoData={memoData}
      currentBudgetColumn={currentBudgetColumn}
      currentBudgetData={currentBudgetData}
    />
  );
};

export default WeeklyPlanner;
