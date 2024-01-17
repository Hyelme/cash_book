import { useState } from "react";
import styled from "styled-components";

const TableCell = ({ type, value, setLocalStorage }) => {
  const [inputData, setInputData] = useState(value);
  // const searchRef = useRef(null);

  // useEffect(() => {
  //   const handleFocus = (event) => {
  //     if (searchRef.current && !searchRef.current.contains(event.target))
  //       setIsFocus(false);
  //   };

  //   document.addEventListener("mouseup", handleFocus);
  //   return () => document.removeEventListener("mouseup", handleFocus);
  // }, [searchRef]);

  const handleOnChange = (event) => {
    setInputData(event.target.value);
    console.log(inputData);
    setLocalStorage(inputData, type);
  };

  return (
    <TableCellContainer key={type}>
      <Cell value={inputData} onChange={handleOnChange} /> 원
    </TableCellContainer>
  );
};

const TableCellContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Cell = styled.input`
  width: 70%;
  border: none;
  background-color: #ffffff00;
  text-align: end;
`;

export default TableCell;
