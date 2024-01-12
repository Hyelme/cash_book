import "./DigitalPanel.css";

const DigitalPanelVertical = ({ isActive, className }) => {
  console.log(`isActive : ${isActive}`);
  return (
    <div
      className={`hexagon ${
        isActive ? "vertical-active" : "vertical-non-active"
      } ${className}`}
    ></div>
  );
};

export default DigitalPanelVertical;
