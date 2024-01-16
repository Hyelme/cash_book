import Table from "components/Table";
import { useMemo } from "react";
import getMonthData from "./data/CalendarFunc";

const getData = (year, month) => {
  const localStorageData = localStorage.getItem(year + ":" + month);

  // 저장된 데이터가 없는 경우
  if (localStorageData === undefined || localStorageData === null) {
    const defaultData = [];
    const monthData = getMonthData(year, month);
    let isThisMonth = false;

    monthData.map((week) => {
      const defaultWeek = {};
      week.map((day) => {
        if ((isThisMonth && day.day !== 1) || (!isThisMonth && day.day === 1)) {
          isThisMonth = true;
          defaultWeek[day.daysOfWeek] = <div>{day.day}</div>; // 캘린더 양식에 맞게 수정
        } else if ((isThisMonth && day.day === 1) || !isThisMonth) {
          isThisMonth = false;
          defaultWeek[day.daysOfWeek] = <div>{day.day}</div>;
        }
      });

      defaultData.push(defaultWeek);
    });

    return defaultData;
  }

  // 저장된 데이터가 있는 경우
  return localStorageData;
};

const Calendar = ({ classNameList, columns, year, month }) => {
  const calendarData = getData(year, month);
  const data = useMemo(() => calendarData, [calendarData]);

  return <Table classNameList={classNameList} columns={columns} data={data} />;
};
export default Calendar;
