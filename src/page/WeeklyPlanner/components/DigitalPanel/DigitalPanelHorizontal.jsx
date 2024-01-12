import "./DigitalPanel.css";

const DigitalPanelHorizontal = ({ isActive, className }) => {
  return (
    <div
      className={`hexagon ${
        isActive ? "horizontal-active" : "horizontal-non-active"
      } ${className}`}
    ></div>
  );
};

export default DigitalPanelHorizontal;
