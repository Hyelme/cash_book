import styled from "styled-components";

const { useRef, useState } = require("react");

const SliderComponent = ({ children, ...rest }) => {
  const containerRef = useRef(null);

  const [dragging, setDragging] = useState(false);
  const [clickPoint, setClickPoint] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDownEvent = (event) => {
    setDragging(true);
    if (containerRef.current) {
      setClickPoint(event.pageX);
      setScrollLeft(containerRef.current.scrollLeft);
    }
  };

  const handleMouseMoveEvent = (event) => {
    if (!dragging) return;

    event.preventDefault();

    if (containerRef.current) {
      const walk = event.pageX - clickPoint;
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <Container {...rest}>
      <Slider
        ref={containerRef}
        onMouseDown={handleMouseDownEvent}
        onMouseLeave={() => setDragging(false)}
        onMouseUp={() => setDragging(false)}
        onMouseMove={handleMouseMoveEvent}
      >
        {children}
      </Slider>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 200%;
`;

const Slider = styled.div`
  display: -webkit-box;
  width: max-content;
  cursor: grab;

  width: 100%;
  height: 100%;
  overflow-y: hidden;
  overflow-x: scroll;

  -ms-overflow-style: none;
  scrollar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default SliderComponent;
