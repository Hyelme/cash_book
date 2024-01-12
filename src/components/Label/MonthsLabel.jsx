import "./MonthsLabel.css";
import { useNavigate } from "react-router-dom";

const MonthsLabel = ({ number }) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    return navigate(`/cashbook/2024/monthly/${number}/calendar`);
  };
  return (
    <div className="LabelComponent" onClick={handleOnClick}>
      <div>{number}</div>
    </div>
  );
};

export default MonthsLabel;
