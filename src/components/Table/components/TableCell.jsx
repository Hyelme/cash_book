import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const TableCell = ({ type, label, value, setLocalStorage }) => {
  const [inputData, setInputData] = useState(value);
  const [isClick, setIsClick] = useState(false);
  const focusRef = useRef();

  useEffect(() => {
    setInputData(value);
  }, [value]);

  useEffect(() => {
    if (isClick && focusRef.current !== undefined) {
      focusRef.current.focus();
    }
  }, [isClick]);

  const handleOnChange = (event) => {
    setInputData(event.target.value);
    setLocalStorage(event.target.value, label);
  };

  const handleOnClick = () => {
    setIsClick(true);
  };

  const handleOnBlur = () => {
    setIsClick(false);
  };

  const getNumberFormat = () => {
    return inputData > 0
      ? inputData.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
      : inputData.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <TableCellContainer>
      {isClick ? (
        <InputCell
          type={type}
          id={label}
          value={inputData}
          onChange={handleOnChange}
          ref={focusRef}
          onBlur={handleOnBlur}
        />
      ) : (
        <TxtCell onClick={handleOnClick}>
          {type === "number" ? getNumberFormat() : inputData}
        </TxtCell>
      )}
      원
    </TableCellContainer>
  );
};

const TableCellContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const InputCell = styled.input`
  width: 70%;
  border: none;
  background-color: #ffffff00;
  text-align: end;
  font-size: 10px;

  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

const TxtCell = styled.div`
  width: 70%;
  display: inline-block;
  margin-right: 3px;
  border: none;
  background-color: #ffffff00;
  text-align: end;
`;

export default TableCell;
