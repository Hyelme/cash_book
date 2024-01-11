import "./WeeklyPlanner.css";
import MonthsLabel from "components/Label/MonthsLabel";
import HeaderLine from "components/HeaderLine";
import Button from "components/Button";
import DigitalPanel from "./components/DigitalPanel";
import Table from "components/Table";
import Calendar from "./components/Calendar";

// export interface ButtonProps {
//   theme?: "primary" | "secondary";
//   backgroundColor?: string;
//   size?: "small" | "medium" | "large" | "bottom";
//   onClick?: () => void;
//   isDisabled?: boolean;
//   children?: React.ReactNode;
//   className?: string;
// }

const WeeklyPlannerView = () => {
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      <div className="header-box">
        <div className="label-box">
          {months.map((month) => (
            <MonthsLabel number={month} key={month} />
          ))}
        </div>
        <HeaderLine />
      </div>
      <div className="page-container">
        <div className="go-to-box">
          <Button>목차 페이지로</Button>
        </div>
        <div className="top-containder">
          <DigitalPanel />
          <Table />
          <Button>월간 계획</Button>
          <Button>월간 결산</Button>
        </div>
        <div className="calendar-container">
          <Calendar />
        </div>
      </div>
    </>
  );
};

export default WeeklyPlannerView;
