import { addDays, endOfMonth, getDate, getDay, startOfDay, startOfMonth, startOfWeek } from "date-fns";

const getMonthData = (year, month) => {

    const dayList = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    
    const selectedDate = new Date(year, month-1);
    const monthData = takeMonth(selectedDate);

    const result = [];
    monthData.map(week => {
        const weekData = [];
        week.map(day => {
            weekData.push({ daysOfWeek : dayList[getDay(day)], day: getDate(day) })
        });
        result.push(weekData);
    })

    return result;
}

const takeMonth = (selectDate) => {
    let month = []
    let date = selectDate

    const weekGen = takeWeek(startOfMonth(date))
    const endDate = startOfDay(endOfMonth(date))
    month.push(weekGen())

    while (lastDayOfRange(month) < endDate) {
        month.push(weekGen())
    }

    const range = month
    month = [];
    date = addDays(lastDayOfRange(range), 1)

    return range;
}

const takeWeek = (selectedDate) => {
    let date = startOfWeek(startOfDay(selectedDate))

    return () => {
        const week = [...Array(7)].map((_, index) => addDays(date, index))
        date = addDays(week[6], 1)
        return week
    }
}

const lastDayOfRange = (range) => {
    return range[range.length - 1][6];
}

export default getMonthData;