import "./MonthsLabel.css";

const MonthsLabel = () => {
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return months.map((month) => {
    return (
      <div className="LabelComponent" key={month}>
        <div>{month}</div>
      </div>
    );
  });
};

export default MonthsLabel;
