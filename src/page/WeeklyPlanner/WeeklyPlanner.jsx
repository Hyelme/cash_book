import { useNavigate } from "react-router-dom";
import WeeklyPlannerView from "./WeeklyPlannerView";

const WeeklyPlanner = () => {
  const navigator = useNavigate();

  const handleOnClickLabel = (event) => {
    navigator(`/cashbook/2024/cover`);
  };

  return <WeeklyPlannerView clickLabel={handleOnClickLabel} />;
};

export default WeeklyPlanner;
