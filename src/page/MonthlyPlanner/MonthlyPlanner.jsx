import { useEffect, useMemo, useState } from "react";
import {
  payPlanColumn,
  calendarColumns,
  weeklyClosingColumns,
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
import MonthlyPlannerView from "./MonthlyPlannerView";
import TableCell from "@/components/Table/components/TableCell";
import { useDispatch, useSelector } from "react-redux";
import { setBasicPay, setBonusPay } from "@/store/monthlyPlan/monthlyPlan";
import WeeklyClosingCell from "./components/WeeklyClosingCell/WeeklyClosingCell";

const MonthlyPlanner = () => {
  const dispatch = useDispatch();

  const year = useSelector((state) => state.cashbook.year);
  const month = useSelector((state) => state.cashbook.month);

  useEffect(() => {
    const dataOnPayPlan = getSaveData(year + ":" + month + ".payPlan");
    dispatch(setBasicPay(parseInt(initPayPlanCell("basicPay", dataOnPayPlan))));
    dispatch(setBonusPay(parseInt(initPayPlanCell("bonusPay", dataOnPayPlan))));
  }, [year, month, dispatch]);

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

  /* 월급 내역 */
  const basicPay = useSelector((state) => state.monthlyPlan.basicPay);
  const bonusPay = useSelector((state) => state.monthlyPlan.bonusPay);

  const memoForPayPlanData = useMemo(
    () => [
      {
        firstLabel: "월급",
        secondLabel: "기본급",
        item: (
          <TableCell
            type="number"
            label="basicPay"
            value={basicPay}
            setLocalStorage={(data, type) => {
              setLocalStorage(year + ":" + month + ".payPlan", data, type);
            }}
          />
        ),
      },
      {
        firstLabel: "월급",
        secondLabel: "보너스",
        item: (
          <TableCell
            type="number"
            label="bonusPay"
            value={bonusPay}
            setLocalStorage={(data, type) => {
              setLocalStorage(year + ":" + month + ".payPlan", data, type);
            }}
          />
        ),
      },
    ],
    [basicPay, bonusPay, month, year]
  );

  const [prevMonthBalance, setPrevMonthBalance] = useState(0);
  const [expectedprofit1, setExpectedprofit1] = useState(0);
  const [expectedprofit2, setExpectedprofit2] = useState(0);
  const [currentbudget, setCurrentbudget] = useState(() =>
    colcBudget(["prevMonthBalanc", "expectedProfit1", "expectedProfit2"])
  );

  const memoForCalendarColum = useMemo(() => calendarColumns, []);
  const memoForWeeklyClosingColumn = useMemo(() => weeklyClosingColumns, []);
  // const memoForWeeklyClosingData = useMemo(() => weeklyClosingData, []);

  const memoForWeeklyClosingData = useMemo(
    () => [
      {
        firstWeek: <WeeklyClosingCell month={month} week={1} />,
        secondWeek: <WeeklyClosingCell month={month} week={2} />,
        thirdWeek: <WeeklyClosingCell month={month} week={3} />,
        fourthWeek: <WeeklyClosingCell month={month} week={4} />,
        fifthWeek: <WeeklyClosingCell month={month} week={5} />,
        sixthWeek: <WeeklyClosingCell month={month} week={6} />,
      },
    ],
    []
  );

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
          <TableCell
            type="number"
            label="prevMonthBalance"
            value={prevMonthBalance}
            setLocalStorage={(data, type) => {
              setLocalStorage(
                year + ":" + month + ".expectedBudget",
                data,
                type
              );
            }}
          />
        ) : (
          <div onClick={handleOnClickPrevMonth}>{prevMonthBalance} 원</div>
        )
      ),
    [month, prevMonthBalance, year]
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
          <TableCell
            type="number"
            label="expectedProfit1"
            value={expectedprofit1}
            setLocalStorage={(data, type) => {
              setLocalStorage(
                year + ":" + month + ".expectedBudget",
                data,
                type
              );
            }}
          />
        ) : (
          <div>{expectedprofit1} 원</div>
        )
      ),
    [expectedprofit1, month, year]
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
          <TableCell
            type="number"
            label="expectedProfit2"
            value={expectedprofit2}
            setLocalStorage={(data, type) => {
              setLocalStorage(
                year + ":" + month + ".expectedBudget",
                data,
                type
              );
            }}
          />
        ) : (
          <div>{expectedprofit2} 원</div>
        )
      ),
    [expectedprofit2, month, year]
  );
  const fixedExpenditure = useMemo(() => initFixedExpenditure(), []);
  const memoColumn = useMemo(
    () => initOneTableColumn("월간 소비 계획 / 메모", "monthlyConsmPlan"),
    []
  );
  const memoData = useMemo(
    () =>
      initOneTableData(
        "monthlyConsmPlan",
        <textarea className="textarea width-80 height-100"></textarea>
      ),
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

  const handleOnClickPrevMonth = (event) => {
    alert(event.target.value);
  };

  return (
    <MonthlyPlannerView
      year={year}
      month={month}
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

export default MonthlyPlanner;
