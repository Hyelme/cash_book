import { useEffect, useState } from "react";
import styled from "styled-components";
import DigitalPanelHorizontal from "./DigitalPanelHorizontal";
import DigitalPanelVertical from "./DigitalPanelVertical";
import "./DigitalPanel.css";

const DigitalPanel = ({ month }) => {
  const [nonActive, setNonActive] = useState([
    { number: 1, months: [1, 4] },
    { number: 2, months: [1, 2, 3, 7] },
    { number: 3, months: [5, 6] },
    { number: 4, months: [0, 1, 7] },
    { number: 5, months: [1, 3, 4, 5, 7, 9] },
    { number: 6, months: [2] },
    { number: 7, months: [1, 4, 7] },
  ]);

  const validIsActive = (number) => {
    return !nonActive[number].months.some((m) => Object.is(m, parseInt(month)));
  };

  return (
    <Container>
      <DigitalPanelHorizontal
        className="horizontal-top"
        isActive={validIsActive(0)}
      />
      <DigitalPanelVertical
        className="vertical-left-top"
        isActive={validIsActive(1)}
      />
      <DigitalPanelVertical
        className="vertical-right-top"
        isActive={validIsActive(2)}
      />
      <DigitalPanelHorizontal
        className="horizontal-center"
        isActive={validIsActive(3)}
      />
      <DigitalPanelVertical
        className="vertical-left-bottom"
        isActive={validIsActive(4)}
      />
      <DigitalPanelVertical
        className="vertical-right-bottom"
        isActive={validIsActive(5)}
      />
      <DigitalPanelHorizontal
        className="horizontal-bottom"
        isActive={validIsActive(6)}
      />
    </Container>
  );
};

const Container = styled.div`
  flex: 0 42px;
  max-height: 7vh;
  justify-items: start;
  padding: 0 3px;
`;

export default DigitalPanel;
